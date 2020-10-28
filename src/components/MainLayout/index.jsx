import React from 'react';
import Cons from '../Cons';
import Pros from '../Pros';

import './styles.css';

const MainLayout = () => {
  return (
    <div className="container">
      <div className="header">Should I eat at McDonalds?</div>
      <div className="wrapper">
        <Pros />
        <Cons />
      </div>
    </div>
  );
};

export default MainLayout;
