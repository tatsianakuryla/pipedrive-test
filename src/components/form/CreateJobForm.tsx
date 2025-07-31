import {FormActions} from "./FormActions.tsx";
import {ClientDetailsSection} from "./ClientDetailsSection.tsx";
import {JobTypeSection} from "./JobTypeSection.tsx";
import {ServiceLocationSection} from "./ServiceLocationSection.tsx";
import {ScheduleSection} from "./ScheduleSection.tsx";
import { useForm } from "react-hook-form";
import type {FormValues, SelectOption} from "../../types.ts";
import {useEffect, useState} from "react";
import {getDealFieldOptions, loadFieldKeyMapFromAPI} from "../../api/requests.ts";
import {Spinner} from "../ui/Spinner/Spinner.tsx";
import {onSubmitDeal} from "../../services/submitDeal.ts";

export function CreateJobForm() {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [optionsMap, setOptionsMap] = useState<Record<string, SelectOption[]>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fieldKeyMap, setFieldKeyMap] = useState<Partial<Record<keyof FormValues, string>>>({});

  useEffect(() => {
    Promise.all([getDealFieldOptions(), loadFieldKeyMapFromAPI()])
      .then(([optionsResponse, keyMap]) => {
        setOptionsMap(optionsResponse);
        setFieldKeyMap(keyMap);
      })
      .catch((error) => {
        console.error("Error loading form setup data:", error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onSubmit = async () => {
    const data = getValues();
    try {
      await onSubmitDeal(data, fieldKeyMap);
      reset();
    }
    catch (error) {
      throw error;
    }
  };

  if (isLoading) return <Spinner />;

  return (
      <form className='create-job-form flex' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group flex'>
          <ClientDetailsSection register={register} errors={errors} />
          <JobTypeSection register={register} errors={errors} jobTypeOptions={optionsMap.jobtype} jobSourceOptions={optionsMap.jobsource} />
          <ServiceLocationSection register={register} errors={errors} areaOptions={optionsMap.area}/>
          <ScheduleSection register={register} errors={errors} techniciansOptions={optionsMap.technician} />
        </div>
        <FormActions />
      </form>
  );
}