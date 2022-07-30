import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './BeerPage.module.scss';

const BeerPage = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBeer = async (search = '') => {
    setLoading(true);

    const response = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);
    setBeer(response.data[0]);
    setLoading(false);
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={beer.image_url} alt={beer.name} />
      <div className={styles.info}>
        <h1 className={styles.name}>{beer.name}</h1>
        <h2 className={styles.tagline}>{beer.tagline}</h2>
        <p className={styles.abv}>Alcohol by volume: {beer.abv}%</p>
        <p className={styles.description}>{beer.description}</p>
        <div className={styles.food_pairing}>Food pairing</div>
        <p className={styles.food_pairing_description}>{beer.food_pairing}</p>
      </div>
    </div>
  );
};

export default BeerPage;
