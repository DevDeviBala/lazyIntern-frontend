import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <div className="min-h-screen font-sora">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;