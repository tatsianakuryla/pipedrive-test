import {Input} from "../ui/Input.tsx";
import type {Option, SectionProperties} from "../../types.ts";
import {Select} from "../ui/Select.tsx";
import {useEffect, useState} from "react";
import {getCountryOptions} from "../../api/requests.ts";

export const ServiceLocationSection = ({register, errors}: SectionProperties) => {
  const [countryOptions, setCountryOptions] = useState<Option[]>([]);

  useEffect(() => {
    getCountryOptions()
      .then(setCountryOptions)
      .catch(console.error);
  }, []);

  return <fieldset
    className='create-job-form__section service-location'>
    <legend
      className='service-location__legend legend'>
      Service Location
    </legend>
      <Input
        {...register('address')}
        className='service-location__input service-location__input_address'
        placeholder='Address'
        errors={errors}
      />
    <Input
      {...register('city')}
      className='service-location__input service-location__input_city'
      placeholder='City'
      errors={errors}
    />
    <Input
      {...register('state')}
      className='service-location__input service-location__input_state'
      placeholder='State'
      errors={errors}
    />

    <div className='service-location__wrapper flex'>
      <Input
        {...register('zipCode')}
        className='service-location__input service-location__input_zip-code'
        placeholder='Zip code'
        errors={errors}
      />
      <Select
        {...register('area')}
        className="service-location__area"
        placeholder="Area"
        options={countryOptions}
        errors={errors}
      />
    </div>
  </fieldset>
}