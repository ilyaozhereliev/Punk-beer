import React from 'react';

const BeerCard = ({ beers, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul>
      {beers.map((beer, i) => (
        <li>
          {beer.name}
          <img src={beer.image_url} alt="beer" />
        </li>
      ))}
    </ul>
  );
};

export default BeerCard;
