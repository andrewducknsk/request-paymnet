export default class paymentFactory {
  constructor(title, counter, price, options = {}) {
    this.paymentDetails = {
      displayItems: [
        {
          label: `${title} - x${counter}`,
          amount: { currency: 'RUB', value: price * counter },
        },
      ],
      total: {
        label: 'Total price: ',
        amount: { currency: 'RUB', value: price * counter },
      },
    };

    this.options = {
      requestShipping: options.shipping || false,
      requestPayerEmail: options.email || false,
      requestPayerPhone: options.phone || false,
      requestPayerName: options.name || false,
    };
  }

  paymentMethods = [
    {
      supportedMethods: 'basic-card',
      data: {
        supportedNetworks: ['visa', 'mastercard', 'mir'],
        supportedTypes: ['credit', 'debit'],
      },
    },
    {
      supportedMethods: 'https://google.com/pay',
      data: {
        environment: 'TEST',
        apiVersion: 1,
        allowedPaymentMethods: ['CARD', 'TOKENIZED_CARD'],
        paymentMethodTokenizationParameters: {
          tokenizationType: 'PAYMENT_GATEWAY',
          // Check with your payment gateway on the parameters to pass.
          parameters: {},
        },
        cardRequirements: {
          allowedCardNetworks: ['AMEX', 'DISCOVER', 'MASTERCARD', 'VISA'],
          billingAddressRequired: true,
          billingAddressFormat: 'MIN',
        },
        phoneNumberRequired: true,
        emailRequired: true,
        shippingAddressRequired: true,
      },
    },
  ];

  shippingOptions = [
    {
      id: 'economy',
      label: 'Pony Delivery (5-7 Days)',
      selected: true,
      amount: {
        currency: 'RUB',
        value: 0,
      },
    },
    {
      id: 'express',
      label: 'Delivery by horses (2-3 Days)',
      amount: {
        currency: 'RUB',
        value: 5,
      },
    },
    {
      id: 'next-day',
      label: 'Delivery on thoroughbred stallions',
      amount: {
        currency: 'RUB',
        value: 12,
      },
    },
  ];

  get getPaymentDetails() {
    return this.paymentDetails;
  }

  get getDisplayItems() {
    return this.paymentDetails.displayItems;
  }

  get getPaymentMethods() {
    return this.paymentMethods;
  }

  get getOptions() {
    return this.options;
  }

  get getShippingOptions() {
    return this.shippingOptions;
  }

  setDisplayItems(items) {
    this.paymentDetails.displayItems.push(items);
  }

  setShippingPrice() {
    // eslint-disable-next-line array-callback-return
    this.paymentDetails.displayItems.map(item => {
      if (item.label === 'Shipping') {
        return (item.amount.value = this.getShippingPrice);
      }
    });

    return this.getDisplayItems;
  }

  calculationTotalPrice() {
    const totalPrice = this.getDisplayItems.reduce((prevItem, currentItem, item, arr) => {
      return prevItem.amount.value + currentItem.amount.value;
    });

    return totalPrice;
  }

  updateDispalyItems() {
    const shippingPrice = this.getShippingOptions.find(option => option.selected).amount.value;

    this.setDisplayItems({
      label: 'Shipping',
      amount: {
        currency: 'RUB',
        value: shippingPrice,
      },
    });

    return this.getDisplayItems;
  }

  get getShippingPrice() {
    return this.getShippingOptions.find(option => option.selected).amount.value;
  }
}
