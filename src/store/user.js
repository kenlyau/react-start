export const types = {
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
  USER_LOGIN_ERROR: 'USER_LOGIN_ERROR',
  USER_LOGOUT_REQUEST: 'USER_LOGOUT_REQUEST',
  USER_LOGOUT_SUCCESS: 'USER_LOGOUT_SUCCESS',
  USER_LOGOUT_ERROR: 'USER_LOGOUT_ERROR',
  USER_INFO_REQUEST: 'USER_INFO_REQUEST',
  USER_INFO_SUCCESS: 'USER_INFO_SUCCESS',
  USER_INFO_ERROR: 'USER_INFO_ERROR'
}

export function userLogin (username, password) {
  return {
    type: types.USER_LOGIN_REQUEST,
    payload: {
      username,
      password
    }
  }
}

export function userLoginError (error) {
  return {
    type: types.USER_LOGIN_ERROR,
    error: error
  }
}
export function userLoginSuccess (response) {
  return {
    type: types.USER_LOGIN_SUCCESS,
    payload: response
  }
}

export default function user (state = {}, action) {
  switch (action.type) {
    case types.USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {auth: action.payload, error: null})
    case types.USER_LOGIN_ERROR:
      return Object.assign({}, state, {error: action.error})
    default:
      return state
  }
}
