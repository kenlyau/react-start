export default function initialState () {
  let auth = window.localStorage.getItem('auth')
  return {
    user: auth ? {auth: JSON.parse(auth)} : {}
  }
}
