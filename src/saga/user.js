import { call, all, put, fork, takeLatest } from 'redux-saga/effects'
import { types, userLoginSuccess, userLoginError } from '../store/user'

import * as api from '../api/'

function * userLogin (action) {
  try {
    const user = yield call(api.loginUser, action.payload)
    yield put(userLoginSuccess(user))
    window.localStorage.setItem('auth', JSON.stringify(user))
    window.location.hash = '/'
  } catch (e) {
    yield put(userLoginError(e))
  }
}

function * watchUserLoginRequest () {
  yield takeLatest(types.USER_LOGIN_REQUEST, userLogin)
}

export default function * sagaUser () {
  yield all([
    fork(watchUserLoginRequest)
  ])
}
