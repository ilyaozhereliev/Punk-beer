import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import BeerCard from '../BeerCard/BeerCard';
import Pagination from '../pagination/Pagination';
import Search from '../Seacrh/Search';
import styles from './MainPage.module.scss';

const defaultBeersPerPage = 12;
const totalBeers = 80;

const MainPage = () => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [beersPerPage] = useState(defaultBeersPerPage);

  const scrollUp = useRef(null);

  const getBeers = async (search = '') => {
    setLoading(true);

    const searchParams = search.trim() === '' ? {} : { beer_name: search };

    const response = await axios.get('https://api.punkapi.com/v2/beers', {
      params: {
        per_page: totalBeers,
        ...searchParams,
      },
    });
    setBeers(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getBeers();
  }, []);

  const totalPage = Math.ceil(beers.length / defaultBeersPerPage);
  const lastBeerIndex = currentPage * beersPerPage;
  const firstBeerIndex = lastBeerIndex - beersPerPage;
  const currentBeer = beers.slice(firstBeerIndex, lastBeerIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
    scrollUp.current.scrollIntoView();
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
    scrollUp.current.scrollIntoView();
  };

  return (
    <div>
      <Search getBeers={getBeers} beers={beers} />
      <div ref={scrollUp}></div>
      <BeerCard beers={currentBeer} loading={loading} />
      {beers.length === 0 ? (
        <div className={styles.error}>NO RESULTS</div>
      ) : (
        <Pagination
          beersPerPage={beersPerPage}
          totalBeers={beers.length}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          isNext={!(currentPage === totalPage)}
          isPrev={!(currentPage < 2)}
        />
      )}
    </div>
  );
};

export default MainPage;
