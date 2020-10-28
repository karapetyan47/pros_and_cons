import { v4 as uuidv4 } from 'uuid';
import { ADD_CONS, CHANGE_CONS, REMOVE_CONS } from './actions';

const initialState = {
  cons: [{ id: uuidv4(), value: '' }],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONS:
      return {
        ...state,
        cons: [...state.cons, { id: uuidv4(), value: '' }],
      };

    case REMOVE_CONS:
      return {
        ...state,
        cons: state.cons.filter((c) => c.id !== payload),
      };

    case CHANGE_CONS:
      const idx = state.cons.findIndex(({ id }) => id === payload.id);
      const newCons = [...state.cons];
      newCons[idx] = { ...newCons[idx], value: payload.value };
      return {
        ...state,
        cons: [...newCons],
      };

    default:
      return state;
  }
};

export default reducer;
