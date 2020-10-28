import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPros, changePros, removePros } from '../../store/pros/actions';
import { prosSelector } from '../../store/pros/selectors';
import InputList from '../InputList';

import './styles.css';

const Pros = () => {
  const pros = useSelector(prosSelector);
  const dispatch = useDispatch();

  return (
    <div className="pros-container">
      <div className="pros-header">Pros</div>
      <div className="pros-content">
        <InputList
          items={pros}
          addItem={() => {
            dispatch(addPros());
          }}
          removeItem={(id) => {
            dispatch(removePros(id));
          }}
          changeItem={(id, value) => {
            dispatch(changePros(id, value));
          }}
        />
      </div>
    </div>
  );
};

export default Pros;
