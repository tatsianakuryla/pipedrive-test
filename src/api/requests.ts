import {API_TOKEN, PIPEDRIVE_API_BASE} from "../constants/constants.ts";
import type {HTTPMethod, PipedriveResponse, RequestBody} from "./api-types.ts";
import type {SelectOption} from "../types.ts";

export async function getDealFieldOptions(): Promise<Record<string, SelectOption[]>> {
  const response = await fetch(`${PIPEDRIVE_API_BASE}/dealFields?api_token=${API_TOKEN}`);
  const json = await response.json();

  if (!json.success || !Array.isArray(json.data)) {
    throw new Error("Failed to load dealFields");
  }

  const result: Record<string, SelectOption[]> = {};

  for (const field of json.data) {
    if (!["enum", "set"].includes(field.field_type)) continue;

    const name = field.name.trim().toLowerCase().replace(/\s+/g, "");
    result[name] = (field.options ?? []).map((option: any) => ({
      label: option.label,
      value: option.id ?? option.label.toLowerCase().replace(/\s+/g, "_"),
    }));
  }

  return result;
}

export async function pipedriveRequest<TResponse>(
  path: string,
  method: HTTPMethod = "GET",
  body?: RequestBody
): Promise<TResponse> {

  const url = `${PIPEDRIVE_API_BASE}${path}${path.includes("?") ? "&" : "?"}api_token=${encodeURIComponent(API_TOKEN)}`;

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  let json: PipedriveResponse<TResponse>;

  try {
    json = await response.json();
  } catch {
    throw new Error("Invalid JSON response");
  }

  if (!response.ok || !json.success) {
    throw new Error(json.error || json.message || response.statusText);
  }

  return json.data;
}