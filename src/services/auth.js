export function isAuth () {
  let auth = window.localStorage.getItem('auth')
  auth = auth ? JSON.parse(auth) : {}
  return !!auth.username
}
