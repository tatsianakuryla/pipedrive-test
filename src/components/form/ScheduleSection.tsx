import {Input} from "../ui/Input.tsx";
import type {ScheduleSectionProperties} from "../../types.ts";
import {Select} from "../ui/Select.tsx";
import {TECHNICIANS} from "../../constants/constants.ts";

export const ScheduleSection = ({
                                  onStartDateInput,
                                  onStartDateChange,
                                  onStartTimeInput,
                                  onStartTimeChange,
                                  onEndTimeInput,
                                  onEndTimeChange,
                                  technicianValue,
                                  onTechnicianChange
                                }: ScheduleSectionProperties) => {

  return <fieldset
    className='create-job-form__section schedule'>
    <legend
      className='schedule__legend legend'>
      Schedule
    </legend>
    <Input
      className='schedule__input schedule__input_start-date'
      type='date'
      name='start-date'
      onInput={onStartDateInput}
      onChange={onStartDateChange}
      placeholder='Start date'
    />

    <div className='schedule__time-wrapper flex'>
      <Input
        className='schedule__input schedule__input_start-time'
        type='time'
        name='start-time'
        onInput={onStartTimeInput}
        onChange={onStartTimeChange}
        placeholder='Start time'
      />

      <Input
        className='schedule__input schedule__input_end-time'
        type='time'
        name='end-time'
        onInput={onEndTimeInput}
        onChange={onEndTimeChange}
        placeholder='End time'
      />
    </div>

      <Select
        className="schedule__technician"
        name="technician"
        placeholder="Select technician"
        options={TECHNICIANS}
        value={technicianValue}
        onChange={onTechnicianChange}
      />
  </fieldset>
}