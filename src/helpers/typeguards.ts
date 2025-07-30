import type {DealField, DealFieldOption, DealFieldsResponse} from "../api/api-types.ts";

function isDealFieldOption(value: unknown): value is DealFieldOption {
  return typeof value === 'object' && value !== null && 'label' in value && typeof (value as any).label === 'string';
}

function isDealField(value: unknown): value is DealField {
  if (typeof value !== 'object' || value === null) return false;
  const obj = value as Record<string, unknown>;
  const hasCore =
    typeof obj.id === 'number' &&
    typeof obj.name === 'string' &&
    typeof obj.field_type === 'string';

  const options = obj.options;
  const hasValidOptions =
    options === undefined ||
    (Array.isArray(options) && options.every(isDealFieldOption));

  return hasCore && hasValidOptions;
}

export function isDealFieldsResponse(value: unknown): value is DealFieldsResponse {
  return (
    typeof value === 'object' &&
    value !== null &&
    Array.isArray((value as any).data) &&
    (value as any).data.every(isDealField)
  );
}