/**
 * 添加本地存储
 * @date 2021-12-03
 * @param { string } name 本地存储名称
 * @param { string } data 本地存储的数据
 */
export const setStorage = (name, data) => {
    console.log('储存成功');
    if (typeof data === 'object') {
        data = JSON.stringify(data)
    }
    window.localStorage.setItem(name, data)
}

/**
 * 获取本地存储
 * @date 2021-12-03
 * @param { string } name 本地存储名称
 */
export const getStorage = (name) => {
    const data = window.localStorage.getItem(name)
    try {
        return JSON.parse(data)
    } catch (err) {
        return data
    }
}

/**
 * 删除本地存储数据
 * @date 2021-12-03
 * @param { string } name 本地存储名称
 */
export const removeStorage = (name) => {
        return window.localStorage.removeItem(name)
    }
    /**
     * 返回当前时间
     */
export const getTime = () => {
        let time = new Date();
        let year = time.getFullYear();
        let mounth = time.getMonth() + 1;
        let date = time.getDate();
        let hour = time.getHours(); //得到小时数
        let minute = time.getMinutes(); //得到分钟数
        return `${year}-${mounth}-${date}  ${hour}:${minute}`;
    }
    //检查字符串切割
export const cutString = (str, len) => {
    if (str.length * 2 <= len) {
        return str;
    }
    let strlen = 0;
    let s = "";
    for (let i = 0; i < str.length; i++) {
        s = s + str.charAt(i);
        if (str.charCodeAt(i) > 128) {
            strlen = strlen + 2;
            if (strlen >= len) {
                return s.substring(0, s.length - 1) + "...";
            }
        } else {
            strlen = strlen + 1;

            if (strlen >= len) {
                return s.substring(0, s.length - 2) + "...";
            }
        }
    }
    return s;
}