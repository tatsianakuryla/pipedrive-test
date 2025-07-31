import type {FormValues} from "../types.ts";

export const API_TOKEN = import.meta.env.VITE_PIPEDRIVE_API_TOKEN as string;
export const PIPEDRIVE_API_BASE = 'https://api.pipedrive.com/v1';
export const dealFieldNameToFormKey: Partial<Record<string, keyof FormValues>> = {
  "Job Type": "jobType",
  "Job Source": "jobSource",
  "Job Description": "jobDescription",
  "Address": "address",
  "City": "city",
  "State": "state",
  "Zip Code": "zipCode",
  "Area": "area",
  "Job Date": "jobDate",
  "Start Time": "startTime",
  "End Time": "endTime",
  "Technician": "technician",
};
