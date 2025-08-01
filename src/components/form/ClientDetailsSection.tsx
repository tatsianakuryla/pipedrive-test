import Input from '../ui/Input.tsx';
import type { SectionProperties } from '../../types.ts';

function ClientDetailsSection({ register, errors }: SectionProperties) {
  return (
    <fieldset className="create-job-form__section client-details flex">
      <h2 className="client-details__legend legend">Client Details</h2>
      <div className="client-details__wrapper flex">
        <Input
          {...register('firstName', { required: 'First name is required' })}
          className="client-details__input client-details__input_firstname"
          placeholder="First Name"
          error={errors.firstName?.message}
        />
        <Input
          {...register('lastName', { required: 'Last name is required' })}
          className="client-details__input client-details__input_lastname"
          placeholder="Last Name"
          error={errors.lastName?.message}
        />
      </div>
      <Input
        className="client-details__input client-details__input_phone"
        {...register('phone', { required: 'Phone number is required' })}
        placeholder="Phone"
        error={errors.phone?.message}
      />
      <Input
        className="client-details__input client-details__input_email"
        {...register('email', {
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email address',
          },
        })}
        type="text"
        placeholder="Email (optional)"
        error={errors.email?.message}
      />
    </fieldset>
  );
}

export default ClientDetailsSection;
