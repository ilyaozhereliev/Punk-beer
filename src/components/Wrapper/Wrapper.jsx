import React from 'react';
import MainPage from '../MainPage/MainPage';
import styles from './Wrapper.module.scss';

const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.page}>
        <MainPage />
      </div>
    </div>
  );
};

export default Wrapper;
