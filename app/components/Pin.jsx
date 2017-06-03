import React from 'react';

import styles from './Pin.scss';

export default function Pin({
  box,
}) {
  return (
    <div className={styles.content}>
      <img className={styles.img} src={box.get('url')}/>
      <div className={styles.title}>{box.get('title')}</div>
      <div className={styles.picTitle}>{box.get('picTitle')}</div>
    </div>
  );
}