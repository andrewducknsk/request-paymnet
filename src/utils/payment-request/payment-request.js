export const paymentMethods = [{
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
}];

export const paymentDetails = (title, counter) => ({
  displayItems: [{
    label: `${title} - x ${counter}`,
    amount: { currency: 'RUB', value: `${10 * counter}` }
  }],
  total: {
    label: 'Total price:',
    amount: { currency: 'RUB', value: `${10 * counter}` }
  }
});

export const options = (paymentOptions) => ({
  requestShipping: paymentOptions.shipping || false,
  requestPayerEmail: paymentOptions.email || false,
  requestPayerPhone: paymentOptions.phone || false,
  requestPayerName: paymentOptions.name || false
});

export const shippingOptions = [
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
];