import classNames from 'classnames';
import React from 'react';

import Icon from './Icon';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import styles from './SearchNavBar.scss';

export default function SearchNavBar ({
    className,
  }) {
  return (
    <div className={classNames(className, styles.container)}>
      <div className={styles.searchNavBar}>
        <Icon className={styles.logo} icon="logo" />
        <SearchBar className={styles.searchBar} />
        <NavBar className={styles.navBar} />
      </div>
    </div>
  );
}