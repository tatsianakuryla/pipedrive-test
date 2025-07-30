import type { SelectProperties } from "../../types.ts";

export const Select = ({
                         className,
                         name,
                         options,
                         placeholder,
                         errors,
                         ...rest
                       }: SelectProperties) => {
  return (
    <div className="select-wrapper">
      <select
        className={className}
        name={name}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {name && errors?.[name]?.message && (
        <div className="select-error">{String(errors[name]?.message)}</div>
      )}
    </div>
  );
};
