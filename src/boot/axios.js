import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL: 'http://192.168.100.7:5050'
  baseURL: 'http://localhost:5050'
})

export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }
