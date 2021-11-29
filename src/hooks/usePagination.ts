import { useState } from 'react';

type UsePaginationProps = {
  contentPerPage: number;
  count: number;
};

type UsePaginationReturn = {
  page: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
};

type UsePagination = (arg: UsePaginationProps) => UsePaginationReturn;

export const usePagination: UsePagination = ({ contentPerPage, count }) => {
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(count / contentPerPage);
  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;

  const changePage = (next: boolean) => {
    setPage(state => {
      if (next) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      }
      if (state === 1) {
        return state;
      }
      return state - 1;
    });
  };

  const setPageSAFE = (num: number) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page,
  };
};

