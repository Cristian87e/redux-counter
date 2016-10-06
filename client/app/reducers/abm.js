import { ABM } from '../constants/actions-type';

const initialState = {
  text: ''
};

export default function (state, action) {
  switch (action.type) {
    case ABM.SAVE:
      debugger
      return {
        ...state,
        text: action.text
      };
    case ABM.FAILS:
      return {
        ...state,
        error: true
      };
    case ABM.CANCEL:
      return {
        ...state,
        error: true
      };
    case ABM.UPDATE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case ABM.MAKE_IT_FAIL:
      return {
        ...state,
        text: action.text
      };
    default:
      return initialState;
  }
};
