import React, { useState } from 'react';
import './light.css';
import lightOn from './light-on.svg';
import lightOff from './light-off.svg';

const Light = ({ name, state }) => {
  const [light, setLight] = useState([state]);
  const handleClick = () => {
    light === 'on' ? setLight(light === 'off') : setLight(light === 'on');
  };

  return (
    <>
      <div className="light" onClick={handleClick}>
        <img src={light ? lightOn : lightOff}></img>
      </div>
    </>
  );
};

export default Light;
