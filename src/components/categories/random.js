import React from 'react';
import { useState } from 'react';

export default function Random() {
  const [misc, setMisc] = useState([]);
  const [quantity, setQuantity] = useState([0,0,0,0,0]);
  const [result, setResult] = useState('false')

  Add = i =>
{
  setState(state => {
    const quantity = state.quantity.map((item, j) => {
      if (j === i) {
        return item + 1;
      } else {
        return item;
      }
    });

    return {
      quantity,
    };
  });
}

  return (
    <div></div>
  )
}
