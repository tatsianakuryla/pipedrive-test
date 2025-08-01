import type { InputProperties } from '../../types.ts';

function Input({ className, type = 'text', placeholder, error, ...rest }: InputProperties) {
  let iconClass = '';

  switch (type) {
    case 'date':
      iconClass = 'calendar-icon';
      break;
    case 'time':
      iconClass = 'clock-icon';
      break;
    default:
      iconClass = '';
  }

  return (
    <div className="input-wrapper flex">
      <label className="input-wrapper-for-icon" htmlFor={className}>
        <input
          id={className}
          className={className}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
        {iconClass.length > 0 && <span className={`icon ${iconClass}`} />}
      </label>
      {error && <div className="input-error">{String(error)}</div>}
    </div>
  );
}

export default Input;
