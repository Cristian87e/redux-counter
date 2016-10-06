import { COUNTER } from '../constants/actions-type';

const initialState = {
  value: -1
};

export default function (state, action) {
  switch (action.type) {
    case COUNTER.INCREMENT:
      return {
        ...state,
        value: state.value + 1
      };
    case COUNTER.DECREMENT:
      return {
        ...state,
        value: state.value - 1
      };
    case COUNTER.UPDATE_VALUE:
      return {
        ...state,
        value: action.value
      };
    default:
      return initialState;
  }
};
