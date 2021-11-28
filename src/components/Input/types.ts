import { BaseSyntheticEvent, KeyboardEvent, ReactNode } from 'react';

export interface IBaseInputProps {
  onChange: ( event: BaseSyntheticEvent ) => void;
  onBlur: ( event: BaseSyntheticEvent ) => void;
  onKeyDown?: ( event: KeyboardEvent<HTMLInputElement> ) => void;
  name?: string;
  value: string | number;
  className?: string;
  autoComplete?: string;
  label?: ReactNode | string;
  error?: ReactNode | string;
  required?: boolean;
  placeholder?: string;
  type?: string;
}