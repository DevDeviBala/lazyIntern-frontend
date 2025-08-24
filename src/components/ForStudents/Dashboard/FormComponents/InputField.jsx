const InputField = ({ label, id, type = 'text', placeholder, value, onChange, required = false, description }) => (
  <div>
    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor={id}>
      {label} {required && '*'}
    </label>
    <input
      type={type}
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
    {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
  </div>
);

export default InputField;