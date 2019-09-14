import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import locale from '../../locale';
import './count-buttons.scss';

const propTypes = {
  onChange: PropTypes.func.isRequired 
};

function CountButtons({onChange}) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    onChange(count);
  })

   function onClickDecrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
 
  function onClickIncrease() {
    setCount(count + 1);
  }

  return (
    <div className="count-buttons">
      <button 
        className="count-buttons_decrease"
        onClick={onClickDecrease}
      >
        {locale.countButtons.decreaseBtn}
      </button>
      <p className="count-buttons_value">{count}</p>
      <button 
        className="count-buttons_increase"
        onClick={onClickIncrease}
      >
        {locale.countButtons.increaseBtn}
      </button>
    </div>
  )
}

CountButtons.propTypes = propTypes;

export default memo(CountButtons);