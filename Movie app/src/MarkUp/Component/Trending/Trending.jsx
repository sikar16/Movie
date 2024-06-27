import React, { useState } from 'react';
import './trending.css';
import Home from '../Home/Home';
import { trending } from '../../../DammpyData';

function Trending() {
  const [items, setItems] = useState(trending);

  return (
    <section className="trending">
      <Home items={items} />
    </section>
  );
}

export default Trending;