import type { FormValues } from '../types.ts';
import { pipedriveRequest } from '../api/requests.ts';

async function onSubmitDeal(
  formData: FormValues,
  fieldKeyMap: Partial<Record<keyof FormValues, string>>,
) {
  const fullName = [formData.firstName, formData.lastName].filter(Boolean).join(' ') || 'Client';

  const person = await pipedriveRequest<{ id: number }>('/persons', 'POST', {
    name: fullName,
    email: formData.email ? [{ value: formData.email, primary: true }] : undefined,
    phone: formData.phone ? [{ value: formData.phone, primary: true }] : undefined,
  });

  const dealBody: Record<string, unknown> = {
    title: `Job for ${fullName}`,
    person_id: person.id,
  };

  Object.entries(formData).forEach(([key, value]) => {
    const fieldKey = fieldKeyMap[key as keyof FormValues];
    if (fieldKey) {
      dealBody[fieldKey] = value;
    }
  });

  const deal = await pipedriveRequest<{ id: number }>('/deals', 'POST', dealBody);

  const noteLines = [
    `Client: ${fullName}`,
    formData.email && `Email: ${formData.email}`,
    formData.phone && `Phone: ${formData.phone}`,
    formData.jobType && `Job type: ${formData.jobType}`,
    formData.jobDescription && `Description: ${formData.jobDescription}`,
    (formData.jobDate || formData.startTime || formData.endTime) &&
      `Scheduled: ${[formData.jobDate, formData.startTime, formData.endTime].filter(Boolean).join(' ')}`,
  ].filter(Boolean);

  if (noteLines.length) {
    await pipedriveRequest('/notes', 'POST', {
      deal_id: deal.id,
      content: noteLines.join('\n'),
    });
  }

  return deal.id;
}

export default onSubmitDeal;
