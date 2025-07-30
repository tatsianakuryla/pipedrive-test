import type {Option, SectionProperties} from "../../types.ts";
import {Select} from "../ui/Select.tsx";
import {useEffect, useState} from "react";
import {getOrganizationFieldOptionsByKey, getOrganizationOptions} from "../../api/requests.ts";
import {INDUSTRIES_KEY} from "../../constants/constants.ts";
import {Textarea} from "../ui/Textarea.tsx";

export const JobTypeSection = ({ register, errors }: SectionProperties) => {
  const [jobTypeOptions, setJobTypeOptions] = useState<Option[]>([]);
  const [sourceOptions, setSourceOptions] = useState<Option[]>([]);

  useEffect(() => {
    getOrganizationFieldOptionsByKey(INDUSTRIES_KEY)
      .then(setJobTypeOptions)
      .catch(console.error);

    getOrganizationOptions()
      .then(setSourceOptions)
      .catch(console.error);
  }, []);

  return <fieldset
    className='create-job-form__section job-info'>
    <legend
      className='job-info__legend legend'>
      Job Type
    </legend>
    <div className='job-info__wrapper flex'>
    <Select
      {...register("jobType", { required: "Please select job type" })}
      className="job-info__type"
      name="jobType"
      placeholder="Job type"
      options={jobTypeOptions}
      errors={errors}
    />

    <Select
      {...register("jobSource")}
      className="job-info__source"
      name="jobSource"
      placeholder="Job source"
      options={sourceOptions}
      errors={errors}
    />
    </div>
    <Textarea
      {...register("jobDescription")}
      name="jobDescription"
      placeholder="Job description (optional)"
      className="job-info__description"
      errors={errors}
    />
  </fieldset>
}