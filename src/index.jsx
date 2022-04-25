import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import smartHomeData from './smartHomeData';

const App = () => (
  <>
    <div className="container">
      <Header title="Chytrý dům" />
      <Dashboard data={smartHomeData} />
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
