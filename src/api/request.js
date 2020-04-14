import axios from 'axios'

// 判断当前的运行环境 process.env.NODE_ENV
// isDev 为真 开发环境 --- npm run serve
// isDev 为假 非开发环境（测试环境，生产环境）- npm run build
const isDev = process.env.NODE_ENV === 'development'

const request = axios.create({
  // 根据环境 设置不同的baseURL
  baseURL: isDev ? '/api' : 'http://112.126.93.147/api'
})

// 请求拦截器 - 所有的请求开始之前先到此处
request.interceptors.request.use((config) => {
  // 可以设置 加载的动画效果 的展示
  // 在必要的路由设置一些额外的参数 ---- token信息携带放在此处
  console.log('正在加载....')
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器 --- 所有请求的相应先到此处
request.interceptors.response.use((response) => {
  // 可以设置 加载的动画效果 的隐藏
  console.log('加载完毕')
  return response
}, (error) => {
  return Promise.reject(error)
})

export default request
