import es6Promise from 'es6-promise'
import axios from 'axios'
es6Promise.polyfill()
axios.defaults.baseURL = 'http://portal.xiandusi.com:1337/example'
axios.defaults.headers['X-Parse-Application-Id'] = '123456'
axios.defaults.headers['X-Parse-REST-API-Key'] = '123456'
axios.defaults.headers['Content-Type'] = 'application/json'

export default axios
