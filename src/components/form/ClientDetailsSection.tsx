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
        error={errors.firstName?.message}
      />
      <Input
        {...register("lastName", { required: "Last name is required" })}
        placeholder='Last Name'
        error={errors.lastName?.message}
      />
    </div>
    <Input
      {...register("phone", { required: "Phone number is required" })}
      placeholder='Phone'
      error={errors.phone?.message}
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
      error={errors.email?.message}
    />
  </fieldset>
}