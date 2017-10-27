import axios from '../utils/axios'

export function loginUser ({username, password}) {
  return axios.get('/login', { params: {
    username,
    password
  }
  })
    .then(res => {
      axios.defaults.headers['X-Parse-Session-Token'] = res.data.sessionToken
      return res.data
    })
}

export function logoutUser () {
  return axios.post('/logout').then(res => {
    return res.data
  })
}

export function getPosts () {
  return axios.get('/classes/Posts').then(res => res.data)
}

export function updateUser (sessionToken) {
  axios.defaults.headers['X-Parse-Session-Token'] = sessionToken
  return axios.get(' https://portal.xiandusi.com:1337/example/sessions')
    .then(res => res.data)
}

export function getPost (id) {
  return axios.get('/classes/Posts/' + id).then(res => res.data)
}
