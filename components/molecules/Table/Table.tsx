import React from 'react';
import CellContent from '../CellContent';
import styles from './Table.module.scss';

export enum ColumnType {
  Text = 'text',
  Relation = 'relation',
}

export type Column<T> = {
  title: string;
  type: ColumnType;
  key: keyof T;
  width?: string;
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
              <CellContent isHeader data={column.title} key={column.key as string} width={column.width} />
            ))}
          </tr>
        </thead>
        <tbody>
          {loading
            ? Array.from({ length: 10 }).map((_, i) => (
                <tr key={`placeholder-${i}`}>
                  {columns.map((column, j) => (
                    <CellContent loading key={`placeholder-${i}-${j}`} width={column.width} />
                  ))}
                </tr>
              ))
            : data?.map((item, index) => (
                <tr key={(item as any)?.uid ?? index}>
                  {columns.map((column) =>
                    column.type === ColumnType.Text ? (
                      <CellContent data={item[column.key] as string} key={column.key as string} width={column.width} />
                    ) : (
                      <CellContent loading data="TO-DO" key={column.key as string} width={column.width} />
                    )
                  )}
                </tr>
              ))}
        </tbody>
      </table>
      {error && <span>{error}</span>}
    </div>
  );
};

export default Table;
