import { call, all, put, fork, takeLatest } from 'redux-saga/effects'
import { 
  types,
  userLoginSuccess,
  userLoginError,
  userLogoutSuccess,
  userLogoutError
} from '../store/user'

import * as api from '../api/'

function * userLogin (action) {
  try {
    const user = yield call(api.loginUser, action.payload)
    yield put(userLoginSuccess(user))
    window.localStorage.setItem('auth', JSON.stringify(user))
  } catch (e) {
    yield put(userLoginError(e))
  }
}

function * watchUserLoginRequest () {
  yield takeLatest(types.USER_LOGIN_REQUEST, userLogin)
}

function * userLogout (action) {
  try {
    yield call(api.logoutUser)
    yield put(userLogoutSuccess())
    window.localStorage.removeItem('auth')
  } catch (e) {
    yield put(userLogoutError())
  }
}

function * watchUserLogoutRequest () {
  yield takeLatest(types.USER_LOGOUT_REQUEST, userLogout)
}

export default function * sagaUser () {
  yield all([
    fork(watchUserLoginRequest),
    fork(watchUserLogoutRequest)
  ])
}
