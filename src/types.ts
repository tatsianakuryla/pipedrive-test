import type {ReactNode} from "react";

export interface ButtonProperties {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export  interface FormActionsProperties {
  handleSubmit: () => void
}