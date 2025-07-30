import type {TextareaProperties} from "../../types.ts";

export const Textarea = ({name, placeholder, value, onChange, className}: TextareaProperties) => {
  return <textarea
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={className}
  />
}