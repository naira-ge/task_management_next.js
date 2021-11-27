import { ReactNode, BaseSyntheticEvent } from 'react';

export type ButtonProps = {
  className?: string;
  size?: any;
  btnColor?: string;
  title?: string;
  children?: string | ReactNode;
  disabled?: boolean;
  loading?: boolean;
  fontSize?: string;
  fontWeight?: string;
  textTransform?: string;
  textColor?: string;
  onClick?: (event: BaseSyntheticEvent) => void;
};
