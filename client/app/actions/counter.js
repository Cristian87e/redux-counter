import { COUNTER } from '../constants/actions-type';

export const increment = () => {
  return {
    type: COUNTER.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: COUNTER.DECREMENT
  };
};

export const updateValue = (value) => {
  return {
    type: COUNTER.UPDATE_VALUE,
    value
  };
};

export const incrementIfOdd = (value) => {
  return (dispatch) => {

    if (value % 2) {
      dispatch(increment());
    }

  };
};

export const incrementAsync = (value, delay) => {
  return (dispatch) => {
    window.setTimeout(() => {
      dispatch(increment());
    }, delay || 1000)
  };
};
