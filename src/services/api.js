import axios from 'axios'

const API_BASE_URL = 'https://fakestoreapi.com'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
})

if (typeof window !== 'undefined') {
  api.defaults.headers.common['Accept'] = 'application/json'
}

export const productService = {
  getAllProducts: async () => {
    try {
      const response = await api.get('/products')
      return response.data
    } catch (error) {
      console.error('Error fetching products:', error)
      return []
    }
  },

  getProductById: async (id) => {
    try {
      const response = await api.get(`/products/${id}`)
      return response.data
    } catch (error) {
      console.error('Error fetching product:', error)
      return null
    }
  },

  getProductsByCategory: async (category) => {
    try {
      const response = await api.get(`/products/category/${category}`)
      return response.data
    } catch (error) {
      console.error('Error fetching products by category:', error)
      return []
    }
  },

  getCategories: async () => {
    try {
      const response = await api.get('/products/categories')
      return response.data
    } catch (error) {
      console.error('Error fetching categories:', error)
      return []
    }
  },
}

export default api
