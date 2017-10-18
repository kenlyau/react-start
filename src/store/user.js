import axios from '../utils/axios'

const types = {
  LOGIN_COMPLETE: 'LOGIN_COMPLETE',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT',
  GET_USER_INFO: 'GET_USER_INFO'
}

export const loginRequest = (username, password) => ({
  type: types.LOGIN_REQUEST,
  username,
  password
})
export const loginComplete = (username, password, response) => ({
  type: types.LOGIN_COMPLETE,
  username,
  password,
  response
})
export const login = (username, password) => {
  return {type: 0}
  // return function (dispatch) {
  //   console.log(dispatch)
  //   // dispatch(loginRequest(username, password))
  //   // return axios.get('/user', {
  //   //   params: {
  //   //     username,
  //   //     password
  //   //   }
  //   // })
  //   //   .then(response => dispatch(loginComplete(username, password, response)))
  // }
}

export const logout = () => ({type: types.LOGOUT})

export default function user (state = {}, action) {
  switch (action.type) {
    case types.LOGIN:
      return Object.assign(state, {user: {username: action.username}})
    default:
      return state
  }
}
