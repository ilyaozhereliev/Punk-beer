import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BeerCard from './BeerCard';

const MainPage = () => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [beerPerPage] = useState(10);

  useEffect(() => {
    const getBeers = async () => {
      setLoading(true);
      const response = await axios.get('https://api.punkapi.com/v2/beers');
      setBeers(response.data);
      setLoading(false);
    };

    getBeers();
  }, []);
  return (
    <div>
      <BeerCard beers={beers} loading={loading} />
    </div>
  );
};

export default MainPage;
