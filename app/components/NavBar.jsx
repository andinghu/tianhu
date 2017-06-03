import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import React from 'react';

import Icon from './Icon';
import { routesSelector } from '../reducers';
import styles from './NavBar.scss';

function NavBar ({
  routes,
  }) {
  return (
    <div className={styles.navBar}>
      {routes.map((route) => (
        <div className={styles.navIconWrapper}>
          <Icon
            className={styles.navIcon}
            height={24}
            width={24}
            key={route}
            icon={route}
          />
        </div>
      ))}
    </div>
  );
}

const selector = createStructuredSelector({
  routes: routesSelector,
});

export default connect(selector, {})(NavBar);

