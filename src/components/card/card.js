import React, { memo, useState } from 'react';
import locale from '../../locale';
import CountButtons from '../count-buttons/count-buttons';
import './card.scss';

export default memo(function Card({title, description, img, alt, paymentFunction}) {
  const [counter, setCounter] = useState(0);
  
  const paymentMethods = [{
    supportedMethods: 'basic-card',
    data: {
      supportedNetworks: ['visa', 'mastercard', 'mir'],
      supportedTypes: ['credit', 'debit']
    }
  }]

  const paymentDetails = {
    displayItems: [{
      label: `${title} - x ${counter}`,
      amount: { currency: 'RUB', value: `${10 * counter}` }
    }],
    total: {
      label: 'Total price:',
      amount: { currency: 'RUB', value: `${10 * counter}` }
    }
  }

  const payment = new PaymentRequest(paymentMethods, paymentDetails);

  function getCount(count) {
    setCounter(count);
  }

  function onPayment() {
    payment.show().then(response => {
      
      response.complete();
    }).catch((error) => {
      console.log(error)
    });
  }
  
  return (
    <div className="card">
      <h3 className="card_title">{title}</h3>
      <img className="card_img" src={img} alt={alt} />
      <p className="card_description">{description}</p>
      <CountButtons onChange={getCount}/>  
      <button 
        className="card_buy-btn"
        onClick={onPayment}
      >
        {locale.card.buyBtn}
      </button>
    </div>
  )
})