import axios from 'axios'

/
const API_BASE_URL = 'https://fakestoreapi.com'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000, // Increased timeout
})

export const productService = {

  getAllProducts: async () => {
    try {
      const response = await api.get('/products')
      return response.data // fakestoreapi.com returns an array directly
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  },

  getProductById: async (id) => {
    try {
      const response = await api.get(`/products/${id}`)
      return response.data // single product object
    } catch (error) {
      console.error('Error fetching product:', error)
      throw error
    }
  },

  
  getProductsByCategory: async (category) => {
    try {
      const response = await api.get(`/products/category/${category}`)
      return response.data // array of products
    } catch (error) {
      console.error('Error fetching products by category:', error)
      throw error
    }
  },

  
  getCategories: async () => {
    try {
      const response = await api.get('/products/categories')
      return response.data // array of category names
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw error
    }
  },
}

export default api
