import React from 'react';
import Light from '../Light/Light';
import './lights.css';

const Lights = ({ lights }) => {
  return (
    <>
      <div className="lights">
        {lights.map((item) => (
          <Light state={item.state} name={item.name} />
        ))}
      </div>
    </>
  );
};

export default Lights;
