import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import styles from './BeerPage.module.scss';

const BeerPage = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState([]);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const getBeer = async () => {
    try {
      const response = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);
      setBeer(response.data[0]);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  if (error) {
    return <h1>There is no such page</h1>;
  }

  return (
    <div className={styles.container}>
      <button className={styles.back} onClick={() => navigate(-1)}>
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </button>
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
