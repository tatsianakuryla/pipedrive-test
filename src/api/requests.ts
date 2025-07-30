import type {Country, Option, Organization} from "../types.ts";
import {API_TOKEN} from "../constants/constants.ts";

export async function getOrganizationFieldOptionsByKey(
  fieldKey: string
): Promise<Option[]> {
  if (!API_TOKEN) {
    throw new Error("VITE_PIPEDRIVE_API_TOKEN is not set");
  }

  const response = await fetch(
    `https://api.pipedrive.com/v1/organizationFields?api_token=${encodeURIComponent(
      API_TOKEN
    )}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch fields: HTTP ${response.status}`);
  }

  const payload: {
    data: Array<{
      key: string;
      field_type: string;
      options?: Array<{ id?: number | string; label: string }>;
    }>;
  } = await response.json();

  const field = payload.data.find(
    (field) =>
      field.key === fieldKey && (field.field_type === "enum" || field.field_type === "set")
  );
  const opts = field?.options ?? [];
  return opts.map((option) => ({
    label: option.label,
    value: String(option.id ?? option.label),
  }));
}

export async function getCountryOptions(): Promise<Option[]> {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,cca2"
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch countries: ${response.status}`);
  }

  const data = (await response.json()) as Country[];

  return data
    .map((country) => ({ label: country.name.common, value: country.cca2 }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

async function getOrganizationNames(
  start = 0,
  limit = 100
): Promise<string[]> {
  if (!API_TOKEN) {
    throw new Error("VITE_PIPEDRIVE_API_TOKEN не задан");
  }

  const url = new URL("https://api.pipedrive.com/v1/organizations");
  url.searchParams.set("start", String(start));
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("api_token", API_TOKEN);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  const payload: {
    success: boolean;
    data: Organization[];
  } = await response.json();

  if (!payload.success) {
    throw new Error("Pipedrive returned success=false");
  }

  return payload.data.map(organization => organization.name);
}

export async function getOrganizationOptions(
  start = 0,
  limit = 50
): Promise<Option[]> {
  const names = await getOrganizationNames(start, limit);
  return names.map((name) => ({ label: name, value: name }));
}

