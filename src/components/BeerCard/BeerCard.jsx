import React from 'react';
import styles from './BeerCard.module.scss';

const BeerCard = ({ beers, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className={styles.container}>
        {beers.map((beer, i) => (
          <div key={beer.name} className={styles.beer_card}>
            <img className={styles.img} src={beer.image_url} alt="beer" />
            <div className={styles.bottom}>
              <h3 className={styles.name}>{beer.name}</h3>
              <p className={styles.tagline}>{beer.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BeerCard;
