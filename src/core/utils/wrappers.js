import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

const DOCTOR = 'Doctor';

// Layout Component Wrappers

export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user.loggedInUser,
  redirectAction: routerActions.replace,
  failureRedirectPath: '/', // '/login' by default.
  wrapperDisplayName: 'UserIsAuthenticated'
});

export const UserIsNotAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/dashboard',
  wrapperDisplayName: 'UserIsNotAuthenticated',
  predicate: user => user.loggedInUser === null,
  allowRedirectBack: false
});

// UI Component Wrappers

export const VisibleOnlyDoctor = UserAuthWrapper({
  authSelector: state => state.user,
  wrapperDisplayName: 'VisibleOnlyDoctor',
  predicate: user => user.loggedInUser && user.loggedInUser.name === DOCTOR,
  FailureComponent: null
});

export const VisibleOnlyPatient = UserAuthWrapper({
  authSelector: state => state.user,
  wrapperDisplayName: 'VisibleOnlyPatient',
  predicate: user => user.loggedInUser && user.loggedInUser.name != DOCTOR,
  FailureComponent: null
});

export const VisibleOnlyAuth = UserAuthWrapper({
  authSelector: state => state.user,
  wrapperDisplayName: 'VisibleOnlyAuth',
  predicate: user => user.loggedInUser,
  FailureComponent: null
});

export const HiddenOnlyAuth = UserAuthWrapper({
  authSelector: state => state.user,
  wrapperDisplayName: 'HiddenOnlyAuth',
  predicate: user => user.loggedInUser === null,
  FailureComponent: null
});