import React from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({ beersPerPage, totalBeers, nextPage, prevPage, isNext, isPrev }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBeers / beersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className={styles.pagination}>
        {isPrev && (
          <button className={styles.button} onClick={prevPage}>
            &laquo;
          </button>
        )}

        {isNext && (
          <button className={styles.button} onClick={nextPage}>
            &raquo;
          </button>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
