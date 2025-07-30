import {FormHeader} from "./FormHeader.tsx";
import {FormActions} from "./FormActions.tsx";
import type {FormEvent} from "react";

export function CreateJobForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  return (
    <div className="container flex">
      <FormHeader />
      <form onSubmit={(event) => handleSubmit(event)}>
        <FormActions />
      </form>
    </div>
  );
}