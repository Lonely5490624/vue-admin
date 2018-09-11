import axios from 'axios'
const qs = require('qs')

axios.defaults.baseURL = 'https://callcenterapi-test.zbjdev.com'
// axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const api = {
  async get (url, data) {
    try {
      let res = await axios.get(url, {params: data})
      res = res.data
      return new Promise((resolve) => {
        if (res.code === 0) {
          resolve(res)
        } else {
          resolve(res)
        }
      })
    } catch (err) {
      console.log('服务器出错')
      console.log(err)
    }
  },
  async post (url, data) {
    try {
      let res = await axios.post(url, qs.stringify(data))
      res = res.data
      return new Promise((resolve, reject) => {
        if (res.code === 0) {
          resolve(res)
        } else {
          reject(res)
        }
      })
    } catch (err) {
      // return (e.message)
      console.log('服务器出错')
      console.log(err)
    }
  }
}
export default api
