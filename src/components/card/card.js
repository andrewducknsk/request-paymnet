import React, { memo, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CountButtons from '../count-buttons/count-buttons';
import paymentFactory from '../../utils/payment-request';
import { MyContext } from '../../context';
import './card.scss';

const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  paymentOptions: PropTypes.object,
};

function Card({ title, description, price, img, alt, paymentOptions = {} }) {
  const [counter, setCounter] = useState(1);
  const {
    card: { buyBtn },
  } = useContext(MyContext);

  const paymentData = new paymentFactory(title, counter, price, paymentOptions);
  const payment = new PaymentRequest(
    paymentData.getPaymentMethods,
    paymentData.getPaymentDetails,
    paymentData.getOptions
  );

  payment.addEventListener('shippingaddresschange', event => {
    event.updateWith({
      displayItems: paymentData.updateDispalyItems(),
      total: {
        label: 'Total price:',
        amount: {
          currency: 'RUB',
          value: paymentData.calculationTotalPrice(),
        },
      },
      shippingOptions: paymentData.getShippingOptions,
    });
  });

  payment.addEventListener('shippingoptionchange', event => {
    const selectedId = event.target.shippingOption;

    paymentData.shippingOptions.forEach(option => {
      option.selected = option.id === selectedId;
    });

    event.updateWith({
      displayItems: paymentData.setShippingPrice(),
      total: {
        label: 'Total price:',
        amount: {
          currency: 'RUB',
          value: paymentData.calculationTotalPrice(),
        },
      },
      shippingOptions: paymentData.getShippingOptions,
    });
  });

  const getCount = count => {
    setCounter(count);
  };

  const onPayment = () => {
    const isCounterMoreZero = counter > 0;

    isCounterMoreZero &&
      payment
        .show()
        .then(response => {
          console.log(response);
          response.complete('success');
        })
        .catch(error => error);
  };

  return (
    <div className="card">
      <h3 className="card_title">{title}</h3>
      <img className="card_img" src={img} alt={alt} />
      <p className="card_description">{description}</p>
      <CountButtons onChange={getCount} />
      <button className="card_buy-btn" onClick={onPayment}>
        {buyBtn}
      </button>
    </div>
  );
}

Card.propTypes = propTypes;

export default memo(Card);
