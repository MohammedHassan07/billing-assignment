import axios from 'axios'

const API_URL = 'http://localhost:3000' // Replace with your backend URL

// Fetch all billing records
export const fetchBillings = async () => {
    try {
        const response = await axios.get(`${API_URL}/billings`)
        return response
    } catch (error) {
        console.error("Error fetching billing records:", error)
        throw error
    }
}

// Create a new billing record
export const createBilling = async (billingData) => {
    try {
        const response = await axios.post(`${API_URL}/billings`, billingData)
        return response
    } catch (error) {
        console.error("Error creating billing record:", error)
        throw error
    }
}

// Update billing record
export const updateBilling = async (billingId, billingData) => {
    try {
        const response = await axios.put(`${API_URL}/billings/${billingId}`, billingData)
        return response
    } catch (error) {
        console.error("Error updating billing record:", error)
        throw error
    }
}

// Delete billing record
export const deleteBilling = async (billingId) => {
    try {
        const response = await axios.delete(`${API_URL}/billings/${billingId}`)
        return response
    } catch (error) {
        console.error("Error deleting billing record:", error)
        throw error
    }
}
