import axios from 'axios'
// token 添加
axios.interceptors.request.use((config) => {
  let token = 'token111'
  if (token) {
    config.headers['token'] = token
  } else {
    return false
  }
  return config
})
export default {
  install (Vue) {
    Vue.prototype.http = http
  }
}
const http = function (method, url, data, tag) {
  if (typeof method === 'object') {
    url = method.url
    data = method.data
    tag = method.tag
    method = method.method || 'get'
  }
  // 是否有this，组件中是否写loading
  const needLoading = tag && this && this.loading
  if (needLoading) {
    this.$set(this.loading, tag, true)
  }
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: data,
      'Content-Type': 'application/json',
      timeout: 6000,
      headers: {
        'Cache-Control': 'no-cache',
        'If-Modified-Since': '0'
      },
      cache: false
    }).then(response => {
      let { status, message } = response.data
      if (status !== 'success') {
      // 失败时输出提示信息
        message && this.$message({
          type: 'error',
          message: message.map(item => item.message).join(' | ')
        })
      } else {
        return resolve(response)
      }
    })
  })
}
