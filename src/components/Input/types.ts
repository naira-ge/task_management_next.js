import { BaseSyntheticEvent, ReactNode } from 'react';

export interface IBaseInputProps {
  onChange: ( event: BaseSyntheticEvent ) => void;
  onBlur: ( event: BaseSyntheticEvent ) => void;
  onKeyDown?: ( event: BaseSyntheticEvent ) => void;
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