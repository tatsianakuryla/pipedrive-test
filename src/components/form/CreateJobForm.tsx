import {FormHeader} from "./FormHeader.tsx";
import {FormActions} from "./FormActions.tsx";
import {ClientDetailsSection} from "./ClientDetailsSection.tsx";
import {JobTypeSection} from "./JobTypeSection.tsx";
import {ServiceLocationSection} from "./ServiceLocationSection.tsx";
import {ScheduleSection} from "./ScheduleSection.tsx";
import { useForm } from "react-hook-form";
import type {FormValues} from "../../types.ts";

export function CreateJobForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="container flex">
      <FormHeader />
      <form className='create-job-form flex' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group flex'>
          <ClientDetailsSection register={register} errors={errors} />
          <JobTypeSection register={register} errors={errors}/>
          <ServiceLocationSection register={register} errors={errors}/>
          <ScheduleSection register={register} errors={errors}/>
        </div>
        <FormActions />
      </form>
    </div>
  );
}