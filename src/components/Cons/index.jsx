import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCons, removeCons, changeCons } from '../../store/cons/actions';
import { consSelector } from '../../store/cons/selectors';
import InputList from '../InputList';

import './styles.css';

const Cons = () => {
  const cons = useSelector(consSelector);
  const dispatch = useDispatch();

  return (
    <div className="cons-container">
      <div className="cons-header">Cons</div>
      <div className="cons-content">
        <InputList
          items={cons}
          addItem={() => {
            dispatch(addCons());
          }}
          removeItem={(id) => {
            dispatch(removeCons(id));
          }}
          changeItem={(id, value) => {
            dispatch(changeCons(id, value));
          }}
        />
      </div>
    </div>
  );
};

export default Cons;
