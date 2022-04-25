import React, { useState } from 'react';
import './light.css';
import lightOn from './light-on.svg';
import lightOff from './light-off.svg';

const Light = ({ name, state }) => {
  const [light, setLight] = useState(state);
  const handleClick = () => {
    light === 'on' ? setLight('off') : setLight('on');
  };

  return (
    <>
      <div className="light" onClick={handleClick}>
        <div className="light__icon">
          <img src={light === 'on' ? lightOn : lightOff}></img>
        </div>
        <div className="light__name">{name}</div>
      </div>
    </>
  );
};

export default Light;
