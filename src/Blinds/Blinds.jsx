import React, { useState } from 'react';
import './blind.css';
import blindOpen from './blinds-open.svg';
import blindClosed from './blinds-closed.svg';

const Blinds = ({ state }) => {
  const [open, setOpen] = useState(state);

  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img src={open === 'open' ? blindOpen : blindClosed}></img>
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          className={open === 'open' ? 'button button--active' : 'button'}
          onClick={() => {
            setOpen('open');
          }}
        >
          Otevřeno
        </button>
        <button
          className={open === 'closed' ? 'button button--active' : 'button'}
          onClick={() => {
            setOpen('closed');
          }}
        >
          Zavřeno
        </button>
      </div>
    </div>
  );
};

export default Blinds;
