import type {ButtonProperties} from "../../types.ts";

export const Button = ({className, children, onClick, type = 'button', disabled = false}: ButtonProperties) => {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}