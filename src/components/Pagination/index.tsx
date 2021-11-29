import { BiCaretLeft, BiCaretRight } from 'react-icons/bi';
import styles from './styles.module.scss';

import type { PaginationProps } from './types';

function Pagination({ className, nextPage, prevPage, page, setPage, totalPages }: PaginationProps) {
  return (
    <div className={className || styles.container}>
      <button onClick={prevPage} className={page === 1 ? styles.disabled : styles.page }>
        <BiCaretLeft />
      </button>
      {[...Array(totalPages).keys()]?.map(el => (
        <button
          onClick={() => setPage(el + 1)}
          key={el}
          className={page === el + 1 ? styles.active : ''}
        >
          {el + 1}
        </button>
      ))}
      <button onClick={nextPage} className={page === totalPages ? styles.disabled : styles.page}>
        <BiCaretRight />
      </button>
    </div>
  );
}

export default Pagination;
