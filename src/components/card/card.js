import React, { memo, useState } from 'react';
import locale from '../../locale';
import CountButtons from '../count-buttons/count-buttons';
import './card.scss';

export default memo(function Card({title, description, img, alt, paymentFunction, paymentOptions = {}}) {
  const [counter, setCounter] = useState(0);
  const [shippingPrice, setShippingPrice] = useState('0');
  
  const paymentMethods = [{
    supportedMethods: 'basic-card',
    data: {
      supportedNetworks: ['visa', 'mastercard', 'mir'],
      supportedTypes: ['credit', 'debit']
    }
  },
  {
    supportedMethods: 'https://google.com/pay',
    data: {
      'environment': 'TEST',
      'apiVersion': 1,
      'allowedPaymentMethods': ['CARD', 'TOKENIZED_CARD'],
      'paymentMethodTokenizationParameters': {
        'tokenizationType': 'PAYMENT_GATEWAY',
        // Check with your payment gateway on the parameters to pass.
        'parameters': {}
      },
      'cardRequirements': {
        'allowedCardNetworks': ['AMEX', 'DISCOVER', 'MASTERCARD', 'VISA'],
        'billingAddressRequired': true,
        'billingAddressFormat': 'MIN'
      },
      'phoneNumberRequired': true,
      'emailRequired': true,
      'shippingAddressRequired': true
    },
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

  const options = {
    requestShipping: true,
    requestPayerEmail: paymentOptions.email || false,
    requestPayerPhone: paymentOptions.phone || false,
    requestPayerName: paymentOptions.name || false
  }

  const shippingOptions = [
    {
      id: 'economy',
      label: 'Economy Shipping (5-7 Days)',
      selected: true,
      amount: {
        currency: 'RUB',
        value: '0',
      },
    }, {
      id: 'express',
      label: 'Express Shipping (2-3 Days)',
      amount: {
        currency: 'RUB',
        value: '5',
      },
    }, {
      id: 'next-day',
      label: 'Next Day Delivery',
      amount: {
        currency: 'RUB',
        value: '12',
      },
    },
  ]

  const payment = new PaymentRequest(paymentMethods, paymentDetails, options);

  const updateDispalyItems = () => {
    const displayItems = paymentDetails.displayItems;

    displayItems.push({
      label: 'Shipping',
      amount: { 
        currency: 'RUB', 
        value: shippingPrice 
      }
    })

    return displayItems;
  }

  payment.addEventListener('shippingaddresschange', (event) => {
    event.updateWith({
      displayItems: updateDispalyItems(),
      total: {
        label: 'Total price:',
        amount: {
          currency: 'RUB',
          value: shippingPrice,
        },
      },
      shippingOptions
    });
   });

  payment.addEventListener('shippingoptionchange', (event) => {
    const prInstance = event.target;
    const selectedId = prInstance.shippingOption;
    
    shippingOptions.forEach((option) => {
      if (option.selected) {
        setShippingPrice(option.amount.value);
      }
      option.selected = option.id === selectedId;
    });
    

    event.updateWith({
      total: {
        label: 'Total price:',
        amount: {
          currency: 'RUB',
          value: shippingPrice,
        },
      },
      shippingOptions,
    });
  });


  const getCount = (count) => {
    setCounter(count);
  }
 
  const onPayment = () => {
    payment.show().then(response => {
      console.log(response)
      response.complete('successs')
    }).catch(error => error);
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