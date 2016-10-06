import { ABM } from '../constants/actions-type';

const save = (text) => {
  return {
    type: ABM.SAVE,
    text
  };
};

const fails = () => {
  return {
    type: ABM.FAILS
  };
};

export const trySave = (itFails) => {
  return (dispatch) => {

    window.setTimeout(() => {
      if (itFails) {
        dispatch(fails());
      } else {
        dispatch(save(text));
      }
    }, 1500)

  };
};

export const cancel = (text) => {
  return {
    type: ABM.CANCEL,
    text
  };
};

export const updateText = (text) => {
  return {
    type: ABM.UPDATE_TEXT,
    text
  };
};

export const makeItFail = (itFails) => {
  return {
    type: ABM.MAKE_IT_FAIL,
    itFails
  };
};
