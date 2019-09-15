import hotdog from './components/cards/images/hotdog.jpg';
import pizza from './components/cards/images/pi.png';
import taco from './components/cards/images/taco.jpg';
import corn from './components/cards/images/corn.jpg';
import burger from './components/cards/images/burger.jpg';

export default {
  header: 'Food Store from Memes',
  countButtons: {
    decreaseBtn: '-',
    increaseBtn: '+',
  },
  card: {
    buyBtn: 'Buy',
  },
  cards: [
    {
      title: 'Snoop Dog',
      description: 'Eat everyday',
      img: hotdog,
      alt: 'Snoop Dog',
      price: 5,
    },
    {
      title: 'Burger',
      description: 'Hot ass burger',
      img: burger,
      alt: 'Burger',
      paymentOptions: { shipping: true },
      price: 10,
    },
    {
      title: 'Hawaiian Pizza',
      description: 'Nooo... Please nooo... 🍍',
      img: pizza,
      alt: 'Hawaiian Pizza',
      paymentOptions: { email: true },
      price: 15,
    },
    {
      title: 'Taco by "Danny" Trejo',
      description: 'Each member who has risen in my institution makes a profit. No freebies, such rules.',
      img: taco,
      alt: 'Taco by "Danny" Trejo',
      paymentOptions: { email: true, phone: true },
      price: 20,
    },
    {
      title: 'Corn Dog',
      description: 'Gav-gav-gav. Help me, please...',
      img: corn,
      alt: 'Corn Dog',
      paymentOptions: { email: true, phone: true, name: true },
      price: 25,
    },
  ],
};
