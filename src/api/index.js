import axios from '../utils/axios'

export function loginUser ({username, password}) {
  return axios.get('/login', { params: {
    username,
    password
  }
  })
    .then(res => res.data)
}
