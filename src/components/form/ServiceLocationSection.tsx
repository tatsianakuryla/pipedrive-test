import {Input} from "../ui/Input.tsx";
import type {ServiceLocationSectionProperties} from "../../types.ts";
import {Select} from "../ui/Select.tsx";

export const ServiceLocationSection = ({register, errors, areaOptions}: ServiceLocationSectionProperties) => {

  return <fieldset
    className='create-job-form__section service-location flex'>
    <h2
      className='service-location__legend legend'>
      Service Location
    </h2>
      <Input
        {...register('address')}
        className='service-location__input service-location__input_address'
        placeholder='Address'
        error={errors.address?.message}
      />
    <Input
      {...register('city')}
      className='service-location__input service-location__input_city'
      placeholder='City'
      error={errors.city?.message}
    />
    <Input
      {...register('state')}
      className='service-location__input service-location__input_state'
      placeholder='State'
      error={errors.state?.message}
    />

    <div className='service-location__wrapper flex'>
      <Input
        {...register('zipCode')}
        className='service-location__input service-location__input_zip-code'
        placeholder='Zip code'
        error={errors.zipCode?.message}
      />
      <Select
        {...register('area')}
        className="service-location__area"
        placeholder="Area"
        options={areaOptions}
        error={errors.area?.message}
      />
    </div>
  </fieldset>
}