import type { SelectProperties } from "../../types.ts";
import {useRef, useState} from "react";

export const Select = ({
                         className,
                         options = [],
                         placeholder,
                         error,
                         ...rest
                       }: SelectProperties) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    ref.current?.classList.toggle('open', newState);
  };

  return (
    <div className="select-wrapper flex">
      <div
        className="select-wrapper-for-after"
        ref={ref}
      >
        <select
          className={className}
          onClick={() => handleClick()}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && <div className="select-error">{String(error)}</div>}
    </div>
  );
};
