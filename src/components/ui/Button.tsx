import type { ButtonProperties } from '../../types.ts';

function Button({
  className,
  children,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProperties) {
  return (
    <button className={className} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
