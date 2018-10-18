import * as types from '../constants/count';

const initialState = {
  num: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD: {
      const newState = {
        ...state,
        num: state.num + 1,
      };
      return newState;
    }

    case types.DIV: {
      const newState = {
        ...state,
        num: state.num - 1,
      };
      return newState;
    }

    default: return state;
  }
}
