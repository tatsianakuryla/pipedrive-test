import type { SelectProperties } from "../../types.ts";

export const Select = ({
                         className,
                         name,
                         value,
                         onChange,
                         options,
                         placeholder,
                         error,
                       }: SelectProperties) => {
  return (
    <div className="select-wrapper">
      <select
        className={className}
        name={name}
        value={value}
        onChange={onChange}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="select-error">{error}</div>}
    </div>
  );
};
