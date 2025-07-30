import {Input} from "../ui/Input.tsx";
import type {ClientDetailsSectionProperties} from "../../types.ts";

export const ClientDetailsSection = ({
                                       onNameInput,
                                       onNameChange,
                                       onSurnameInput,
                                       onSurnameChange,
                                       onNumberInput,
                                       onNumberChange,
                                       onEmailInput,
                                       onEmailChange,
                                      }: ClientDetailsSectionProperties) => {
  return <fieldset
    className='create-job-form__section client-details'>
    <legend
    className='client-details__legend legend'>
      Client Details
    </legend>
    <div className='client-details__fullname flex'>
      <Input
        name='firstName'
        onInput={onNameInput}
        onChange={onNameChange}
        placeholder='First Name'
      />
      <Input
        name='lastName'
        onInput={onSurnameInput}
        onChange={onSurnameChange}
        placeholder='Last Name'
      />
    </div>
    <Input
      name='clientNumber'
      onInput={onNumberInput}
      onChange={onNumberChange}
      placeholder='Phone'
    />
    <Input
      name='clientEmail'
      type='email'
      onInput={onEmailInput}
      onChange={onEmailChange}
      placeholder='Email (optional)'
    />
  </fieldset>
}