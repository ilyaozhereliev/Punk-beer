import React, { useState } from 'react';
import styles from './Search.module.scss';

const Search = ({ getBeers }) => {
  const [search, setSearch] = useState('');
  const searchBeer = (e) => {
    if (e.key === 'Enter' || e.button === 0) {
      e.preventDefault();
      getBeers(search);
    }
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.row}>
          <h1>Find Your Beer</h1>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Enter Your Beer Name"
              value={search}
              autoFocus
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBeer}
            />
            <button href="#" onClick={searchBeer}>
              <i className="fa fa-search fa-2xs"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
