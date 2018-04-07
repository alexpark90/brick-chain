import constants from 'core/types';

const initialState = {
  user: null
};

export function userReducer (state = initialState, action) {

  switch (action.type) {

  case constants.USER_LOGGED_IN :
    return Object.assign({}, state, {
      data: action.payload
    });

  case constants.USER_LOGGED_OUT :
    return state;

  default:
    return state;
  }
}