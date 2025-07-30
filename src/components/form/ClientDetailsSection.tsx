import {Input} from "../ui/Input.tsx";
import type {SectionProperties} from "../../types.ts";

export const ClientDetailsSection = ({ register, errors }: SectionProperties) => {
  return <fieldset
    className='create-job-form__section client-details'>
    <legend
    className='client-details__legend legend'>
      Client Details
    </legend>
    <div className='client-details__fullname flex'>
      <Input
        {...register("firstName", { required: "First name is required" })}
        placeholder='First Name'
        errors={errors}
      />
      <Input
        {...register("lastName", { required: "Last name is required" })}
        placeholder='Last Name'
        errors={errors}
      />
    </div>
    <Input
      {...register("clientNumber", { required: "Phone number is required" })}
      placeholder='Phone'
      errors={errors}
    />
    <Input
      {...register("email", {
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Invalid email address",
        },
      })}
      type='text'
      placeholder='Email (optional)'
      errors={errors}
    />
  </fieldset>
}