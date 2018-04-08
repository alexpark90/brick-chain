import constants from 'core/types';

const initialState = {
  loggedInUser: null
};

export function userReducer (state = initialState, action) {

  switch (action.type) {

  case constants.USER_LOGGED_IN :
    return Object.assign({}, state, {
      loggedInUser: action.payload
    });

  case constants.USER_LOGGED_OUT :
    return initialState;

  default:
    return state;
  }
}