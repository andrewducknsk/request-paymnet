import React, { memo } from 'react';
import Header from '../header/header';
import Cards from '../cards/cards';
import { MyContext } from '../../context';
import locale from '../../locale';

function App() {
  return (
    <MyContext.Provider value={locale}>
      <Header />
      <Cards />
    </MyContext.Provider>
  );
}

export default memo(App);
