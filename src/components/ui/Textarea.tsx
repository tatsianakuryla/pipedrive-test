import type {TextareaProperties} from "../../types.ts";

export const Textarea = ({name, placeholder, className, errors, ...rest}: TextareaProperties) => {
  return (
    <div className="textarea-wrapper">
      <textarea
      name={name}
      placeholder={placeholder}
      className={className}
      {...rest}
    />
  </div>)
}