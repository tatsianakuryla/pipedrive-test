import {Input} from "../ui/Input.tsx";
import type {ScheduleSectionProperties} from "../../types.ts";
import {Select} from "../ui/Select.tsx";

export const ScheduleSection = ({register, errors, techniciansOptions}: ScheduleSectionProperties) => {

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
      error={errors.jobDate?.message}
    />

    <div className='schedule__time-wrapper flex'>
      <Input
        {...register('startTime')}
        className='schedule__input schedule__input_start-time'
        type='time'
        placeholder='Start time'
        error={errors.startTime?.message}
      />

      <Input
        {...register('endTime')}
        className='schedule__input schedule__input_end-time'
        type='time'
        placeholder='End time'
        error={errors.endTime?.message}
      />
    </div>

      <Select
        {...register('technician')}
        className="schedule__technician"
        placeholder="Select technician"
        options={techniciansOptions}
        error={errors.technician?.message}
      />
  </fieldset>
}