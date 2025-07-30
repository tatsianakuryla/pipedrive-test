import {Input} from "../ui/Input.tsx";
import type {Option, ServiceLocationProperties} from "../../types.ts";
import {Select} from "../ui/Select.tsx";
import {useEffect, useState} from "react";
import {getCountryOptions} from "../../api/requests.ts";

export const ServiceLocationSection = ({
                                         onAddressInput,
                                         onAddressChange,
                                         onCityInput,
                                         onCityChange,
                                         onStateInput,
                                         onStateChange,
                                         onZipCodeInput,
                                         onZipCodeChange,
                                         countryValue,
                                         onCountryChange,
                                     }: ServiceLocationProperties) => {
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
        className='service-location__input service-location__input_address'
        name='Address'
        onInput={onAddressInput}
        onChange={onAddressChange}
        placeholder='Address'
      />
    <Input
      className='service-location__input service-location__input_city'
      name='City'
      onInput={onCityInput}
      onChange={onCityChange}
      placeholder='City'
    />
    <Input
      className='service-location__input service-location__input_state'
      name='State'
      onInput={onStateInput}
      onChange={onStateChange}
      placeholder='State'
    />

    <div className='service-location__wrapper flex'>
      <Input
        className='service-location__input service-location__input_zip-code'
        name='zip-code'
        onInput={onZipCodeInput}
        onChange={onZipCodeChange}
        placeholder='Zip code'
      />
      <Select
        className="service-location__area"
        name="area"
        placeholder="Area"
        options={countryOptions}
        value={countryValue}
        onChange={onCountryChange}
      />
    </div>
  </fieldset>
}