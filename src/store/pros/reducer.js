import { v4 as uuidv4 } from 'uuid';
import { ADD_PROS, CHANGE_PROS, REMOVE_PROS } from './actions';

const initialState = {
  pros: [{ id: uuidv4(), value: '' }],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PROS:
      return {
        ...state,
        pros: [...state.pros, { id: uuidv4(), value: '' }],
      };

    case REMOVE_PROS:
      return {
        ...state,
        pros: state.pros.filter((p) => p.id !== payload),
      };
    case CHANGE_PROS:
      const idx = state.pros.findIndex(({ id }) => id === payload.id);
      const newPros = [...state.pros];
      newPros[idx] = { ...newPros[idx], value: payload.value };
      return {
        ...state,
        cons: [...newPros],
      };

    default:
      return state;
  }
};

export default reducer;
