import { ReactNode, BaseSyntheticEvent } from 'react';

export type LayoutProps = {
  title?: string;
  children?: ReactNode;
  className?: string;
  isAuth?: boolean;
  onClick?: (event: BaseSyntheticEvent) => void;
  toggle?: () => void;
};
