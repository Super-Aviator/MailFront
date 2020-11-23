// http 封装axios模块文件夹
// config.js axios的默认配置
// api.js 二次封装axios，拦截器等
// interface.js 请求接口文件
// index.js 将axios封装成插件
export default {
  method: 'post',
  // 基础url前缀
  baseURL: process.env.VUE_APP_BASE_API,
  // 请求头信息
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: false,
  // 返回数据类型
  responseType: 'json'
}
