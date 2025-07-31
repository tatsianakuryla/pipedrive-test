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
  error?: string;
}

export interface TextareaProperties {
  className?: string;
  placeholder?: string;
  error?: string;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProperties extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
}

export interface SectionProperties {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

export interface JobTypeSectionProperties extends SectionProperties {
  jobTypeOptions: SelectOption[];
  jobSourceOptions: SelectOption[];
}

export interface ScheduleSectionProperties extends SectionProperties {
  techniciansOptions: SelectOption[];
}

export interface ServiceLocationSectionProperties extends SectionProperties {
  areaOptions: SelectOption[];
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

export type FormValues = {
  firstName: string;
  lastName: string;
  phone: string;
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

export interface Person {
  name: string;
  email?: string;
  number?: string;
  id: string;
}