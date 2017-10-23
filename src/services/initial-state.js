export default function initialState () {
  let auth = window.localStorage.getItem('auth')
  auth = auth ? JSON.parse(auth) : {}
  return {
    user: {
      auth
    }
  }
}
