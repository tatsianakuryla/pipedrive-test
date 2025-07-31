import type {JobTypeSectionProperties} from "../../types.ts";
import {Select} from "../ui/Select.tsx";
import {Textarea} from "../ui/Textarea.tsx";

export const JobTypeSection = ({ register, errors, jobTypeOptions, jobSourceOptions }: JobTypeSectionProperties) => {

  return <fieldset
    className='create-job-form__section job-info flex'>
    <h2
      className='job-info__legend legend'>
      Job Type
    </h2>
    <div className='job-info__wrapper flex'>
    <Select
      {...register("jobType", { required: "Please select job type" })}
      className="job-info__type"
      placeholder="Job type"
      options={jobTypeOptions}
      error={errors.jobType?.message}
    />

    <Select
      {...register("jobSource")}
      className="job-info__source"
      placeholder="Job source"
      options={jobSourceOptions}
      error={errors.jobSource?.message}
    />
    </div>
    <Textarea
      {...register("jobDescription")}
      placeholder="Job description (optional)"
      className="job-info__description"
      error={errors.jobDescription?.message}
    />
  </fieldset>
}