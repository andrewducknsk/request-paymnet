const paymentMethods = [{
    supportedMethods: 'basic-card',
    data: {
        supportedNetworks: [
            'visa', 'mastercard', 'mir'
        ]
    }
}]

const paymentDetails = {
    displayItems: [{
        label: 'Snoop Dog - x1',
        amount: { currency: 'RUB', value: '10' }
    }]
}

export const firstPayment = new PaymentRequest(paymentMethods, paymentDetails);