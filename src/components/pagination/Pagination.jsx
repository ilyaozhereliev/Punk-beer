import React from 'react';
import styles from './Pagination.module.scss';
const Pagination = ({ beersPerPage, totalBeers, paginate, nextPage, prevPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBeers / beersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className={styles.pagination}>
        <button className={styles.button} onClick={prevPage}>
          &laquo;
        </button>

        {pageNumbers.map((number) => (
          <li className={styles.number} key={number}>
            <a href="!#" className={styles.page_link} onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
        <button className={styles.button} onClick={nextPage}>
          &raquo;
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
