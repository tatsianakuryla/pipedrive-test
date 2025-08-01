import { API_TOKEN, dealFieldNameToFormKey, PIPEDRIVE_API_BASE } from '../constants/constants.ts';
import type {HTTPMethod, PipedriveDealField, PipedriveResponse, RequestBody} from './api-types.ts';
import type { FormValues, SelectOption } from '../types.ts';

export async function getDealFieldOptions(): Promise<Record<string, SelectOption[]>> {
  const fields = await pipedriveRequest<PipedriveDealField[]>('/dealFields');

  const result: Record<string, SelectOption[]> = {};

  for (const field of fields) {
    const isSelectable = field.field_type === 'enum' || field.field_type === 'set';

    if (isSelectable) {
      const fieldName = field.name.trim().toLowerCase().replace(/\s+/g, '');

      const options: SelectOption[] = (field.options || []).map((option) => {
        const value = option.id ?? option.label.toLowerCase().replace(/\s+/g, '_');
        return {
          label: option.label,
          value: value,
        };
      });

      result[fieldName] = options;
    }
  }

  return result;
}
export async function loadFieldKeyMapFromAPI(): Promise<Partial<Record<keyof FormValues, string>>> {
  const fields = await pipedriveRequest<PipedriveDealField[]>('/dealFields');

  const result: Partial<Record<keyof FormValues, string>> = {};

  for (const field of fields) {
    const formKey = dealFieldNameToFormKey[field.name];
    if (formKey !== undefined) {
      result[formKey] = field.key;
    }
  }

  return result;
}

export async function pipedriveRequest<TResponse>(
  path: string,
  method: HTTPMethod = 'GET',
  body?: RequestBody
): Promise<TResponse> {
  const queryDelimiter = path.includes('?') ? '&' : '?';
  const fullUrl = `${PIPEDRIVE_API_BASE}${path}${queryDelimiter}api_token=${encodeURIComponent(API_TOKEN)}`;

  const response = await fetch(fullUrl, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  let json: PipedriveResponse<TResponse>;
  try {
    json = await response.json();
  } catch {
    throw new Error('Invalid JSON response');
  }

  if (!response.ok || !json.success) {
    throw new Error(`Pipedrive API error: ${json.error || json.message || response.statusText}`);
  }

  return json.data;
}
