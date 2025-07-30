import type {JobTypeSectionProperties, Option} from "../../types.ts";
import {Select} from "../ui/Select.tsx";
import {useEffect, useState} from "react";
import {getOrganizationFieldOptionsByKey, getOrganizationOptions} from "../../api/requests.ts";
import {INDUSTRIES_KEY} from "../../constants/constants.ts";

export const JobTypeSection = ({
                                 jobTypeValue,
                                 onJobTypeChange,
                                 jobSourceValue,
                                 onJobSourceChange,
                                 jobDescription,
                                 onDescriptionChange,
                               }: JobTypeSectionProperties) => {
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
      className="job-info__type"
      name="jobType"
      placeholder="Job type"
      options={jobTypeOptions}
      value={jobTypeValue}
      onChange={onJobTypeChange}
    />

    <Select
      className="job-info__source"
      name="jobSource"
      placeholder="Job source"
      options={sourceOptions}
      value={jobSourceValue}
      onChange={onJobSourceChange}
    />
    </div>
    <textarea
      name="jobDescription"
      placeholder="Job description (optional)"
      value={jobDescription}
      onChange={onDescriptionChange}
      className="job-info__description"
    />
  </fieldset>
}