import React from 'react';
import Pagination from '../../molecules/Pagination';
import Table from '../../molecules/Table';
import { Column } from '../../molecules/Table/Table';
import styles from './PaginatedTable.module.scss';

type Props<T> = {
  title?: string;
  columns: Column<T>[];
  data?: T[];
  loading: boolean;
  error: string;
  pagination: {
    total: number;
    totalPages: number;
    currentPage: number;
  };
  onPageChange: (page: number) => void;
};

const PaginatedTable = <T,>({ title, columns, data, loading, error, pagination, onPageChange }: Props<T>) => {
  const handlePageChange = (page: number) => {
    if (onPageChange) onPageChange(page);
  };

  return (
    <div className={styles.container}>
      {title && <h1 className={styles.title}>{title}</h1>}
      <Table columns={columns} data={data} loading={loading} error={error} />
      {!loading && <Pagination {...pagination} onPageClick={handlePageChange} />}
    </div>
  );
};

export default PaginatedTable;
