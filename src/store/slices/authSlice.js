import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/api";

// Helper to decode JWT
const decodeJWT = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

// Add this function to refresh tokens
export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const refresh = localStorage.getItem("refresh");
      const response = await API.post("/auth/refresh/", { refresh });

      const newAccess = response.data.access;
      localStorage.setItem("access", newAccess);

      return newAccess;
    } catch (err) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return rejectWithValue(
        err.response?.data || { detail: "Token refresh failed" }
      );
    }
  }
);

// Add response interceptor to handle token expiration
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccess = await refreshToken().unwrap();
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;
        return API(originalRequest);
      } catch (refreshError) {
        // Redirect to login if refresh fails
        window.location.href = "/auth";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await API.post("/auth/login/", { email, password });

      const { access, refresh, email: userEmail, role } = response.data;

      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);

      return { access, refresh, email: userEmail, role };
    } catch (err) {
      return rejectWithValue(err.response?.data || { detail: "Login failed" });
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.post("/auth/register/", data);
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { detail: "Registration failed" }
      );
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await API.post("/auth/forgot-password/", { email });
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { detail: "Failed to send reset email" }
      );
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const response = await API.post(`/auth/reset-password/${token}/`, {
        password,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || { detail: "Failed to reset password" }
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loading: false, error: null },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        // save only relevant user info
        state.user = {
          email: action.payload.email,
          role: action.payload.role,
          access: action.payload.access,
          refresh: action.payload.refresh,
        };
        localStorage.setItem("role", action.payload.role);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
