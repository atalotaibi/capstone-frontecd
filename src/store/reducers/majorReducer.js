import * as actionTypes from "../actions/actionTypes";

const initialState = {
  majors: null
};

const majorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MAJORS:
      return {
        ...state,
        majors: action.payload
      };

    default:
      return state;
  }
};

export default majorsReducer;
