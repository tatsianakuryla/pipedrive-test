import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Spinner from '../ui/Spinner/Spinner.tsx';
import DealMessage from '../ui/DealMessage/DealMessage.tsx';
import type { FormValues, SelectOption } from '../../types.ts';
import { getDealFieldOptions, loadFieldKeyMapFromAPI } from '../../api/requests.ts';
import onSubmitDeal from '../../services/submitDeal.ts';
import ClientDetailsSection from './ClientDetailsSection.tsx';
import JobTypeSection from './JobTypeSection.tsx';
import ServiceLocationSection from './ServiceLocationSection.tsx';
import ScheduleSection from './ScheduleSection.tsx';
import FormActions from './FormActions.tsx';
import './form.css';

function CreateJobForm() {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const [optionsMap, setOptionsMap] = useState<Record<string, SelectOption[]>>({});
  const [fieldKeyMap, setFieldKeyMap] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [isLoading, setIsLoading] = useState(true);

  const [dealUrl, setDealUrl] = useState('');
  const [isDealSubmitted, setIsDealSubmitted] = useState(false);

  useEffect(() => {
    Promise.all([getDealFieldOptions(), loadFieldKeyMapFromAPI()])
      .then(([optionsResponse, keyMap]) => {
        setOptionsMap(optionsResponse);
        setFieldKeyMap(keyMap);
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onSubmit = async () => {
    const data = getValues();
    const dealId = await onSubmitDeal(data, fieldKeyMap);
    setDealUrl(`https://app.pipedrive.com/deal/${dealId}`);
    setIsDealSubmitted(true);
    reset();
  };

  if (isLoading) return <Spinner />;
  if (isDealSubmitted) return <DealMessage dealUrl={dealUrl} />;

  return (
    <form className="create-job-form flex" onSubmit={handleSubmit(onSubmit)}>
      <div className="create-job-form__group flex">
        <ClientDetailsSection register={register} errors={errors} />
        <JobTypeSection
          register={register}
          errors={errors}
          jobTypeOptions={optionsMap.jobtype}
          jobSourceOptions={optionsMap.jobsource}
        />
        <ServiceLocationSection register={register} errors={errors} areaOptions={optionsMap.area} />
        <ScheduleSection
          register={register}
          errors={errors}
          techniciansOptions={optionsMap.technician}
        />
      </div>
      <FormActions />
    </form>
  );
}

export default CreateJobForm;
