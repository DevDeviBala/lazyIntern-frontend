const TextAreaField = ({ label, id, placeholder, value, onChange, rows = 4 }) => (
  <div>
    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor={id}>
      {label}
    </label>
    <textarea
      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
    />
  </div>
);

export default TextAreaField;