import {FormHeader} from "./FormHeader.tsx";
import {FormActions} from "./FormActions.tsx";
import type {FormEvent} from "react";
import {ClientDetailsSection} from "./ClientDetailsSection.tsx";
import {JobTypeSection} from "./JobTypeSection.tsx";
import {ServiceLocationSection} from "./ServiceLocationSection.tsx";

export function CreateJobForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  return (
    <div className="container flex">
      <FormHeader />
      <form className='create-job-form' onSubmit={(event) => handleSubmit(event)}>
        <ClientDetailsSection />
        <JobTypeSection />
        <ServiceLocationSection />
        <FormActions />
      </form>
    </div>
  );
}