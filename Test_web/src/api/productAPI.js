import axios from 'axios'

const API_URL = 'http://localhost:3000' // Replace with your backend URL

// Fetch all products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`)
        return response
    } catch (error) {
        console.error("Error fetching products:", error)
        throw error
    }
}

// Add a new product
export const addProduct = async (productData) => {
    try {
        const response = await axios.post(`${API_URL}/products`, productData)
        return response
    } catch (error) {
        console.error("Error adding product:", error)
        throw error
    }
}

// Update product
export const updateProduct = async (productId, productData) => {
    try {
        const response = await axios.put(`${API_URL}/products/${productId}`, productData)
        return response
    } catch (error) {
        console.error("Error updating product:", error)
        throw error
    }
}

// Delete product
export const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(`${API_URL}/products/${productId}`)
        return response
    } catch (error) {
        console.error("Error deleting product:", error)
        throw error
    }
}
