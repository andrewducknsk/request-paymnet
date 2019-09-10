import React, { memo } from 'react';
import Card from '../card/card';
import './app.scss';
import hotdog from '../card/images/hotdog.jpg';
import pizza from '../card/images/pizza.jpg';
import taco from '../card/images/taco.jpg';
import corn from '../card/images/corn.jpg';

export default memo(function App() {
  return (
    <div className="app">
      <h1 className="app_title">Food Store from Memes</h1>
      <Card 
        title="Snoop Dog"
        description="Eat everyday"
        img={hotdog}
        alt="Snoop Dog"
        />
      <Card 
        title="Hawaiian Pizza"
        description="It is a pineapple 🍍"
        img={pizza}
        alt="Hawaiian Pizza"
        paymentOptions={{ email: true }}
        />
      <Card 
        title="Taco by 'Danny' Trejo"
        description="Each member who has risen in my institution makes a profit. No freebies, such rules."
        img={taco}
        alt="Taco by 'Danny' Trejo"
        paymentOptions={{ email: true, phone: true }}
        />
      <Card 
        title="Corn Dog"
        description="Gav-gav-gav. Help me, please..."
        img={corn}
        alt="Corn Dog"
        paymentOptions={{ email: true, phone: true, name: true }}
        />
    </div>
  );
})