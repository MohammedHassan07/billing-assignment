import axios from 'axios'

const API_URL = 'http://localhost:3000' // Replace with your backend URL

// Fetch all customers
export const fetchCustomers = async () => {
    try {
        const response = await axios.get(`${API_URL}/customers`)
        return response
    } catch (error) {
        console.error("Error fetching customers:", error)
        throw error
    }
}

// Add a new customer
export const addCustomer = async (customerData) => {
    try {
        const response = await axios.post(`${API_URL}/customers`, customerData)
        return response
    } catch (error) {
        console.error("Error adding customer:", error)
        throw error
    }
}

// Update customer
export const updateCustomer = async (customerId, customerData) => {
    try {
        const response = await axios.put(`${API_URL}/customers/${customerId}`, customerData)
        return response
    } catch (error) {
        console.error("Error updating customer:", error)
        throw error
    }
}

// Delete customer
export const deleteCustomer = async (customerId) => {
    try {
        const response = await axios.delete(`${API_URL}/customers/${customerId}`)
        return response
    } catch (error) {
        console.error("Error deleting customer:", error)
        throw error
    }
}
