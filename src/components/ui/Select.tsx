import type { SelectProperties } from "../../types.ts";

export const Select = ({
                         className,
                         options = [],
                         placeholder,
                         error,
                         ...rest
                       }: SelectProperties) => {
  return (
    <div className="select-wrapper flex">
      <select
        className={className}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="select-error">{String(error)}</div>}
    </div>
  );
};
