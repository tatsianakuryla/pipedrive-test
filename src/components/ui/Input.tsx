import type { InputProperties } from '../../types.ts';

export const Input = ({
                        className,
                        type = 'text',
                        placeholder,
                        error,
                        ...rest
                      }: InputProperties) => {
  const iconClass =
    type === 'date' ? 'calendar-icon' :
      type === 'time' ? 'clock-icon' :
        '';

  return (
    <div className='input-wrapper flex'>
      <div className='input-wrapper-for-icon'>
        <input
          className={className}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
        {iconClass.length > 0 && <span className={`icon ${iconClass}`} />}
      </div>
      {error && <div className="input-error">{String(error)}</div>}
    </div>
  );
};
