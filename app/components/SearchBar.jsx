import React from 'react';

import Icon from './Icon';
import styles from './SearchBar.scss';

export default function SearchBar ({
  }) {
  return (
    <div className={styles.searchBar}>
      <Icon
        className={styles.magnifier}
        icon="magnifier"
        height={20}
        width={20}
      />
      <input className={styles.searchBox} />
    </div>
  );
}