import {FormHeader} from "./FormHeader.tsx";
import {FormActions} from "./FormActions.tsx";
import {ClientDetailsSection} from "./ClientDetailsSection.tsx";
import {JobTypeSection} from "./JobTypeSection.tsx";
import {ServiceLocationSection} from "./ServiceLocationSection.tsx";
import {ScheduleSection} from "./ScheduleSection.tsx";
import { useForm } from "react-hook-form";
import type {FormValues, SelectOption} from "../../types.ts";
import {useEffect, useState} from "react";
import {getDealFieldOptions} from "../../api/requests.ts";
import {Spinner} from "../ui/Spinner/Spinner.tsx";

export function CreateJobForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [optionsMap, setOptionsMap] = useState<Record<string, SelectOption[]>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getDealFieldOptions().then((response) => {
      setOptionsMap(response);
      setIsLoading(false);
    });
  }, []);
  const onSubmit = () => {};

  if (isLoading) return <Spinner />;

  return (
    <div className="container flex">
      <FormHeader />
      <form className='create-job-form flex' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group flex'>
          <ClientDetailsSection register={register} errors={errors} />
          <JobTypeSection register={register} errors={errors} jobTypeOptions={optionsMap.jobtype} jobSourceOptions={optionsMap.jobsource} />
          <ServiceLocationSection register={register} errors={errors} areaOptions={optionsMap.area}/>
          <ScheduleSection register={register} errors={errors} techniciansOptions={optionsMap.technician} />
        </div>
        <FormActions />
      </form>
    </div>
  );
}