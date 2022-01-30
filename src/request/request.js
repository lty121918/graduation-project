import axios from 'axios'

let instance = axios.create({
    baseURL: "http://api.tushare.pro",
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}

});
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//请求拦截
instance.interceptors.request.use(config => {
    // let token = "2aa6079a53c04ee96881c2a69ad751d938b3e8828569cea247615cdc";
    // if (token) {
    //     config.headers = {
    //         'token': token
    //     }
    // }
    return config;

}, err => {
    console.log('请求失败');
    return Promise.reject(err);

})

// 响应拦截
instance.interceptors.response.use(config => {
    return config;
}, err => {
    console.log('响应失败');
    return Promise.reject(err);
})
// 整体导出
export default instance;