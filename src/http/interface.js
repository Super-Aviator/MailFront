import axios from './api' // 导入 api

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 此处的数据依然来自 Easy Mock
 */

// 单独导出

// 首页轮播图
export const sendrequest = params => {
  const data = {
    url: params.request.url || '',
    method: params.request.method
  }
  const paramsData = {
    ...params.data,
    ...params.request.data
  };
  if (params.request.method === 'get' || params.request.method === 'GET') {
    data.params = paramsData
  } else if (params.request.method === 'post' || params.request.method === 'POST') {
    data.data = paramsData
  }
  return axios(data)
}

// 默认全部倒出
// 根据需要进行
export default {
  sendrequest
}
