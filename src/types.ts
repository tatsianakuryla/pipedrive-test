import type {ChangeEvent, FormEvent, InputHTMLAttributes, ReactNode, SelectHTMLAttributes} from "react";

export interface ButtonProperties {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: Button;
  disabled?: boolean;
}

export interface InputProperties extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name?: string;
  type?: Input;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onInput?: (event: FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProperties extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  name?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
}

export interface ClientDetailsSectionProperties {
  onNameInput?: (event: FormEvent<HTMLInputElement>) => void;
  onNameChange?: (event: FormEvent<HTMLInputElement>) => void;
  onSurnameInput?: (event: FormEvent<HTMLInputElement>) => void;
  onSurnameChange?: (event: FormEvent<HTMLInputElement>) => void;
  onNumberInput?: (event: FormEvent<HTMLInputElement>) => void;
  onNumberChange?: (event: FormEvent<HTMLInputElement>) => void;
  onEmailInput?: (event: FormEvent<HTMLInputElement>) => void;
  onEmailChange?: (event: FormEvent<HTMLInputElement>) => void;
}

export interface JobTypeSectionProperties {
  jobTypeValue?: string;
  onJobTypeChange?: (event: FormEvent<HTMLSelectElement>) => void;
  jobSourceValue?: string;
  onJobSourceChange?: (event: FormEvent<HTMLSelectElement>) => void;
  jobDescription?: string;
  onDescriptionChange?: (event: FormEvent<HTMLTextAreaElement>) => void;
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