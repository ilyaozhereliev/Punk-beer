import React from 'react';
import styles from './BeerCard.module.scss';
import { useNavigate } from 'react-router-dom';

const BeerCard = ({ beers, loading }) => {
  const history = useNavigate();
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const openCard = (id) => {
    history(`/beer_page/${id}`);
  };

  return (
    <>
      <div className={styles.container}>
        {beers.map((beer, i) => (
          <div
            key={beer.id}
            className={styles.beer_card}
            onClick={() => {
              openCard(beer.id);
            }}
          >
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
