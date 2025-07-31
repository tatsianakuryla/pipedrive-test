import type {TextareaProperties} from "../../types.ts";

export const Textarea = ({ placeholder, className, error, ...rest}: TextareaProperties) => {
  return (
    <div className="textarea-wrapper flex">
      <textarea
      placeholder={placeholder}
      className={className}
      {...rest}
    />
  </div>)
}