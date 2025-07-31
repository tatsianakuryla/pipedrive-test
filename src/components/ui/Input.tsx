import type { InputProperties } from '../../types.ts';

export const Input = ({
                        className,
                        type = 'text',
                        placeholder,
                        error,
                        ...rest
                      }: InputProperties) => {
  return (
    <div className='input-wrapper flex'>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {error && <div className="input-error">{String(error)}</div>}
    </div>
  );
};
