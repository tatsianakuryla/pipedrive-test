import type { InputProperties } from '../../types.ts';

export const Input = ({
                        className,
                        name,
                        type = 'text',
                        placeholder,
                        errors,
                        ...rest
                      }: InputProperties) => {
  return (
    <div className='input-wrapper flex'>
      <input
        className={className}
        name={name}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {errors?.[name]?.message && (
        <div className="input-error">{String(errors[name]?.message)}</div>
      )}
    </div>
  );
};
