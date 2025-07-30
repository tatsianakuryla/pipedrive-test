import {Input} from "../ui/Input.tsx";
import type {SectionProperties} from "../../types.ts";
import {Select} from "../ui/Select.tsx";
import {TECHNICIANS} from "../../constants/constants.ts";

export const ScheduleSection = ({register, errors}: SectionProperties) => {

  return <fieldset
    className='create-job-form__section schedule'>
    <legend
      className='schedule__legend legend'>
      Schedule
    </legend>
    <Input
      {...register('jobDate')}
      className='schedule__input schedule__input_start-date'
      type='date'
      placeholder='Start date'
      errors={errors}
    />

    <div className='schedule__time-wrapper flex'>
      <Input
        {...register('startTime')}
        className='schedule__input schedule__input_start-time'
        type='time'
        placeholder='Start time'
        errors={errors}
      />

      <Input
        {...register('endTime')}
        className='schedule__input schedule__input_end-time'
        type='time'
        placeholder='End time'
        errors={errors}
      />
    </div>

      <Select
        {...register('technician')}
        className="schedule__technician"
        placeholder="Select technician"
        options={TECHNICIANS}
        errors={errors}
      />
  </fieldset>
}