import React from 'react';
import Placeholder from '../../atoms/Placeholder';

import styles from './CellContent.module.scss';

type Props = {
  data?: string;
  loading?: boolean;
  isHeader?: boolean;
};

const CellContent: React.FC<Props> = ({ data, loading, isHeader = false }) => {
  const content = loading ? <Placeholder /> : <span>{data ?? ''}</span>;

  return isHeader 
    ? <th className={`${styles.cell} ${styles.heading}`}>{content}</th>
    : <td className={styles.cell}>{content}</td>;
};

export default CellContent;
