import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BeerCard from '../BeerCard/BeerCard';
import Pagination from '../pagination/Pagination';
import Search from '../Seacrh/Search';
import styles from './MainPage.module.scss';

const defaultBeersPerPage = 15;

const MainPage = () => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [beersPerPage] = useState(defaultBeersPerPage);

  const getBeers = async (search = '') => {
    setLoading(true);

    const searchParams = search.trim() === '' ? {} : { beer_name: search };

    const response = await axios.get('https://api.punkapi.com/v2/beers', {
      params: {
        per_page: 80,
        ...searchParams,
      },
    });
    setBeers(response.data);
    setLoading(false);
    console.log(response.data, 'data');
  };

  useEffect(() => {
    getBeers();
  }, []);

  const lastBeerIndex = currentPage * beersPerPage;
  const firstBeerIndex = lastBeerIndex - beersPerPage;
  const currentBeer = beers.slice(firstBeerIndex, lastBeerIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div>
      <Search getBeers={getBeers} beers={beers} />
      <BeerCard beers={currentBeer} loading={loading} />
      <Pagination
        beersPerPage={beersPerPage}
        totalBeers={beers.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

export default MainPage;
