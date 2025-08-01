import type { TextareaProperties } from '../../types.ts';

function Textarea({ placeholder, className, error, ...rest }: TextareaProperties) {
  return (
    <div className="textarea-wrapper flex">
      <textarea placeholder={placeholder} className={className} {...rest} />
    </div>
  );
}

export default Textarea;
