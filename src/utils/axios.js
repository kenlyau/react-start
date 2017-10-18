import axios from 'axios'
axios.defaults.baseURL = 'http://portal.xiandusi.com:1337/example'
axios.defaults.headers['X-Parse-Application-Id'] = '123456'
axios.defaults.headers['X-Parse-REST-API-KEY'] = '123456'
axios.defaults.headers['Content-Type'] = 'application/json'

export default axios
