import React from 'react';
import Light from '../Light/Light';

const Lights = ({ lights }) => {
  return (
    <>
      <Light state={[lights.state]} />
    </>
  );
};

export default Lights;
