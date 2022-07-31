import React from 'react';
import styles from './BeerCard.module.scss';
import { useNavigate } from 'react-router-dom';

const maxDescriptionLength = 50;

const BeerCard = ({ beers, loading }) => {
  const navigate = useNavigate();

  const openCard = (id) => {
    navigate(`/beer_page/${id}`);
  };

  const substr = (str) => {
    return str.length > maxDescriptionLength ? `${str.substring(0, maxDescriptionLength)}...` : str;
  };

  if (loading) {
    return (
      <div className={styles.load_container}>
        <div className={styles.lds_ring}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.container}>
        {beers.map((beer) => (
          <div
            key={beer.id}
            className={styles.beer_card}
            onClick={() => {
              openCard(beer.id);
            }}
          >
            <img
              className={styles.img}
              onError={(e) => console.warn(e)}
              src={beer.image_url}
              alt="beer"
            />
            <div className={styles.bottom}>
              <h3 className={styles.name}>{beer.name}</h3>
              <p className={styles.description}>{substr(beer.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BeerCard;
