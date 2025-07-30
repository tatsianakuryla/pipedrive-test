import type { InputProperties } from '../../types.ts';

export const Input = ({
                        className,
                        name,
                        type = 'text',
                        value,
                        onChange,
                        onInput,
                        placeholder,
                        error,
                      }: InputProperties) => {
  return (
    <div className='input-wrapper flex'>
      <input
        className={className}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onInput={onInput}
        placeholder={placeholder}
      />
      {error && <div className='input-error'>{error}</div>}
    </div>
  );
};
