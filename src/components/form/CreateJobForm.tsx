import {FormHeader} from "./FormHeader.tsx";
import {FormActions} from "./FormActions.tsx";
import type {FormEvent} from "react";
import {ClientDetailsSection} from "./ClientDetailsSection.tsx";
import {JobTypeSection} from "./JobTypeSection.tsx";
import {ServiceLocationSection} from "./ServiceLocationSection.tsx";
import {ScheduleSection} from "./ScheduleSection.tsx";

export function CreateJobForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  return (
    <div className="container flex">
      <FormHeader />
      <form className='create-job-form flex' onSubmit={(event) => handleSubmit(event)}>
        <div className='form-group flex'>
          <ClientDetailsSection />
          <JobTypeSection />
          <ServiceLocationSection />
          <ScheduleSection />
        </div>
        <FormActions />
      </form>
    </div>
  );
}