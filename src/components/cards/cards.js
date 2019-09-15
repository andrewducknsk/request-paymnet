import React, { memo, useContext } from 'react';
import Card from '../card/card';
import './cards.scss';
import { MyContext } from '../../context';

function Cards() {
  const { cards } = useContext(MyContext);

  const renderContext = () =>
    cards.map(card => (
      <Card
        key={card.title}
        title={card.title}
        description={card.description}
        price={card.price}
        img={card.img}
        alt={card.alt}
        paymentOptions={card.paymentOptions}
      />
    ));

  return <div className="cards">{renderContext()}</div>;
}

export default memo(Cards);
