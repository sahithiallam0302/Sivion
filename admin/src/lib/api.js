import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  withCredentials: true,
})

// Attach token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('sivion_admin_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// Handle token expiry
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('sivion_admin_token')
      window.location.href = '/login'
    }
    return Promise.reject(err)
  }
)

export default api
