import React, { memo, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CountButtons from '../count-buttons/count-buttons';
import { paymentMethods, paymentDetails, options } from '../../utils/payment-request/payment-request';
import { MyContext } from '../../context';
import './card.scss';

const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  paymentOptions: PropTypes.object
}

function Card({title, description, img, alt, paymentOptions = {}}) {
  const [counter, setCounter] = useState(0);
  // const [shippingPrice, setShippingPrice] = useState('0');
  const { card: { buyBtn }} = useContext(MyContext);
  
  const payment = new PaymentRequest(
    paymentMethods, 
    paymentDetails(title, counter), 
    options(paymentOptions)
  );

  // const updateDispalyItems = () => {
  //   const displayItems = paymentDetails.displayItems;

  //   displayItems.push({
  //     label: 'Shipping',
  //     amount: { 
  //       currency: 'RUB', 
  //       value: shippingPrice 
  //     }
  //   })

  //   return displayItems;
  // }

  // payment.addEventListener('shippingaddresschange', (event) => {
  //   event.updateWith({
  //     displayItems: updateDispalyItems(),
  //     total: {
  //       label: 'Total price:',
  //       amount: {
  //         currency: 'RUB',
  //         value: shippingPrice,
  //       },
  //     }
  //   });
  //  });

  // payment.addEventListener('shippingoptionchange', (event) => {
  //   const prInstance = event.target;
  //   const selectedId = prInstance.shippingOption;
    
  //   shippingOptions.forEach((option) => {
  //     if (option.selected) {
  //       setShippingPrice(option.amount.value);
  //     }
  //     option.selected = option.id === selectedId;
  //   });
    

  //   event.updateWith({
  //     total: {
  //       label: 'Total price:',
  //       amount: {
  //         currency: 'RUB',
  //         value: shippingPrice,
  //       },
  //     },
  //     shippingOptions,
  //   });
  // });


  const getCount = (count) => {
    setCounter(count);
  }
 
  const onPayment = () => {
    payment.show().then(response => {
      console.log(response)
      response.complete('success')
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
        {buyBtn}
      </button>
    </div>
  )
}

Card.propTypes = propTypes;

export default memo(Card);