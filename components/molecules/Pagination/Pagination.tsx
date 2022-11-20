import React from 'react';

import styles from './Pagination.module.scss';

type Props = {
  total: number;
  totalPages: number;
  currentPage: number;
  onPageClick: (page: number) => void;
};

const Pagination: React.FC<Props> = ({ total, totalPages, currentPage, onPageClick }) => {
  const PAGE_SIZE = 10;

  const handlePageClick = (page: number) => {
    if (onPageClick) onPageClick(page);
  };

  const currentPageMin = (currentPage - 1) * PAGE_SIZE + 1;
  const currentPageMax = currentPage * PAGE_SIZE > total ? total : currentPage * PAGE_SIZE;

  return (
    <nav className={styles.container}>
      <span className={styles.caption}>
        Showing {currentPageMin}-{currentPageMax} of {total} results
      </span>
      <ul className={styles.list}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li className={`${styles.item} ${currentPage === index + 1 ? styles.active : ''}`} key={`page-${index}`}>
            {currentPage === index + 1 ? (
              <span>{index + 1}</span>
            ) : (
              <button onClick={() => handlePageClick(index + 1)}>{index + 1}</button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
