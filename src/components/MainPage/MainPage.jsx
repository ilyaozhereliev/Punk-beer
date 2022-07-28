import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BeerCard from '../BeerCard/BeerCard';
import Pagination from '../pagination/Pagination';

const MainPage = () => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [beersPerPage] = useState(9);

  useEffect(() => {
    const getBeers = async () => {
      setLoading(true);
      const response = await axios.get('https://api.punkapi.com/v2/beers');
      setBeers(response.data);
      setLoading(false);
      console.log(response.data, 'data');
    };

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
