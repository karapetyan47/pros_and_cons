export const ADD_CONS = 'ADD_CONS';
export const REMOVE_CONS = 'REMOVE_CONS';
export const CHANGE_CONS = 'CHANGE_CONS';

export const addCons = () => ({ type: ADD_CONS });
export const removeCons = (payload) => ({ type: REMOVE_CONS, payload });
export const changeCons = (payload) => ({ type: CHANGE_CONS, payload });
