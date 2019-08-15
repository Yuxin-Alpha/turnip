import { AxiosRequestConfig } from './types'
export default function xhr(config: AxiosRequestConfig) :void  {
  // 解构赋值可以存在默认参数
  const { data = null, url, method = 'get' } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
