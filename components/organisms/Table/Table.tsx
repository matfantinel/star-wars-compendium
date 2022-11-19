import React from 'react';
import styles from './Table.module.scss';

export enum ColumnType {
  Text = 'text',
  Relation = 'relation',
}

export type Column<T> = {
  title: string;
  type: ColumnType;
  key: keyof T;
};

type Props<T> = {
  columns: Column<T>[];
  data?: T[];
  loading: boolean;
  error: string;
};

const Table = <T,>({ columns, data, loading, error }: Props<T>) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key as string}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!loading &&
            data?.map((item, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column.key as string}>
                    {column.type === ColumnType.Text ? (item[column.key] as string) : 'TO-DO'}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
    </div>
  );
};

export default Table;
