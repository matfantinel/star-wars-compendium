import React from 'react';

import styles from './Placeholder.module.scss';

type Props = {
  height?: string;
  width?: string;
  maxWidth?: string;
};

const Placeholder: React.FC<Props> = ({ height = '26px', width = '100%', maxWidth = '100%' }) => {
  return (
    <span className={styles.placeholder} style={{ height, width, maxWidth }}>
      &zwnj;
    </span>
  );
};

export default Placeholder;
