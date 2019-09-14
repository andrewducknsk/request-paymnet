import React, { memo } from 'react';
import Header from '../header/header';
import Cards from '../cards/cards';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Cards />
    </div>
  );
}

export default memo(App);