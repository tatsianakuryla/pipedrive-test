import type {InputHTMLAttributes, ReactNode, SelectHTMLAttributes} from "react";
import type {FieldErrors, UseFormRegister} from "react-hook-form";

export interface ButtonProperties {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: Button;
  disabled?: boolean;
}

export interface InputProperties extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: Input;
  placeholder?: string;
  errors?: FieldErrors;
}

export interface TextareaProperties {
  className?: string;
  placeholder?: string;
  errors?: FieldErrors;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProperties extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options: SelectOption[];
  placeholder?: string;
  errors?: FieldErrors;
}

  export interface SectionProperties {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

type Button = "button" | "submit" | "reset";

type Input = "button" |
"checkbox" |
"color" |
"date" |
"datetime-local" |
"email" |
"file" |
"hidden" |
"image" |
"month" |
"number" |
"password" |
"radio" |
"range" |
"reset" |
"search" |
"submit" |
"tel" |
"text" |
"time" |
"url" |
"week";

export type Option = { label: string; value: string };
export type Country = { name: { common: string }; cca2: string };

export interface Organization {
  id: number;
  name: string;
}

export type FormValues = {
  firstName: string;
  lastName: string;
  clientNumber: string;
  email: string;
  jobType: string;
  jobSource: string;
  jobDescription: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  area: string;
  jobDate: string;
  startTime: string;
  endTime: string;
  technician: string;
};