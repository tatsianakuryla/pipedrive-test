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