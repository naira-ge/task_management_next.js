import { ReactNode } from 'react';
import { AnyObject } from 'utils/types';

export type TableProps = {
  className?: string;
  children?: ReactNode;
  requestSort?: (key: string | number) => void;
  getClassNamesFor?: (name: string) => void;
  tableData?: AnyObject[];
  headingColumns?: string[];
  firstContentIndex?: number;
  lastContentIndex?: number;
  isLoading?: boolean;
};

export type PaginationProps = {
  className?: string;
  contentPerPage?: number;
  page?: number;
  totalPages?: number;
  nextPage?: () => void;
  prevPage?: () => void;
  setPage?: (page: number) => void;
};
