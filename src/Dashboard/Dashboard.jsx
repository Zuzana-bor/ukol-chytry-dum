import React from 'react';
import './dashboard.css';
import Lights from '../Lights/Lights';
import Climate from '../Climate/Climate';
import Blinds from '../Blinds/Blinds';
import Energy from '../Energy/Energy';

const Dashboard = ({ data }) => {
  return (
    <>
      <main className="dashboard">
        <Lights lights={data.lights} />
        <Climate
          temperature={data.climate.temperature}
          huminity={data.climate.huminity}
        />
        <Blinds state={data.blinds} />
        <Energy
          electricity={data.energyConsumption.electricity}
          water={data.energyConsumption.water}
        />
      </main>
    </>
  );
};

export default Dashboard;
