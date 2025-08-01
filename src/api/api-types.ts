export interface DealFieldOption {
  id?: number | string;
  label: string;
}

export interface DealField {
  id: number;
  name: string;
  field_type: string;
  options?: DealFieldOption[];
}

export interface DealFieldsResponse {
  data: DealField[];
}

export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface PipedriveResponse<T> {
  success: boolean;
  data: T;
  error?: string;
  message?: string;
}

export type RequestBody = Record<string, unknown> | undefined;

export type Option = {
  id?: string;
  label: string;
};
