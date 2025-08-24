const ToggleSwitch = ({ label, id, checked, onChange, description }) => (
  <div className="flex items-center justify-between">
    <div className="space-y-0.5">
      <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" htmlFor={id}>
        {label}
      </label>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </div>
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={`peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        checked ? 'bg-primary' : 'bg-input'
      }`}
      onClick={() => onChange(!checked)}
    >
      <span
        className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      ></span>
    </button>
  </div>
);

export default ToggleSwitch;