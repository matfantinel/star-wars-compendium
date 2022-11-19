import React from 'react';
import CellContent from '../../molecules/CellContent';
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
              <CellContent isHeader data={column.title} key={column.key as string} />
            ))}
          </tr>
        </thead>
        <tbody>
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <tr key={`placeholder-${i}`}>
                  {columns.map((_, j) => (
                    <CellContent loading key={`placeholder-${i}-${j}`} />
                  ))}
                </tr>
              ))
            : data?.map((item, index) => (
                <tr key={(item as any)?.uid ?? index}>
                  {columns.map((column) =>
                    column.type === ColumnType.Text ? (
                      <CellContent data={item[column.key] as string} key={column.key as string} />
                    ) : (
                      <CellContent loading data='TO-DO' key={column.key as string} />
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
