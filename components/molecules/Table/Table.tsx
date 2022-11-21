import React from 'react';

import { Column, ColumnType } from '../../../data/characters/columns';
import CellContent from '../CellContent';
import styles from './Table.module.scss';

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
                  {columns.map((column) => {
                    const value = item[column.key] as string;
                    if (column.type === ColumnType.Relation) {
                      const relationValue = (item as any)[`${column.key as string}Url`];
                      return (
                        <CellContent
                          loading={
                            relationValue && (!Array.isArray(relationValue) || relationValue.length > 0) && !value
                          }
                          data={value}
                          key={column.key as string}
                          width={column.width}
                        />
                      );
                    } else {
                      return <CellContent data={value} key={column.key as string} width={column.width} />;
                    }
                  })}
                </tr>
              ))}
        </tbody>
      </table>
      {error && <span>{error}</span>}
    </div>
  );
};

export default Table;
