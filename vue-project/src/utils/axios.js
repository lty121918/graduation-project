import axios from 'axios'

axios.defaults.baseURL = "http://api.tushare.pro";
axios.defaults.timeout = 10000;
// axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios