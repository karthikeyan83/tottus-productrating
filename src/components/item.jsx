import React from 'react';
import PropTypes from 'prop-types';

import Price from './price';

import './item.css';
import Rating from '@material-ui/lab/Rating';


function Item(props) {
  const { name, price, desc,rating } = props;
  return (
    <div className="item">
      <h1>{name}</h1>
      <Price value={price} />
      <p>{desc}</p>
      <p>{rating}</p>
      <Rating name="half-rating" defaultValue={rating} precision={0.5} />
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Item;
