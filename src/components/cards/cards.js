import React, { memo } from 'react';
import Card from '../card/card';
import hotdog from './images/hotdog.jpg';
import pizza from './images/pi.png';
import taco from './images/taco.jpg';
import corn from './images/corn.jpg';
import burger from './images/burger.jpg';

function Cards() {
  return (
    <div className="cards">
      <Card 
        title="Snoop Dog"
        description="Eat everyday"
        img={hotdog}
        alt="Snoop Dog"
      />
      <Card 
        title="Burger"
        description="Hot ass burger"
        img={burger}
        alt="Burger"
        paymentOptions={{ email: true }}
      />
      <Card 
        title="Hawaiian Pizza"
        description="Nooo... Please nooo... 🍍"
        img={pizza}
        alt="Hawaiian Pizza"
        paymentOptions={{ email: true, shipping: true }}
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
  )
}

export default memo(Cards);