import React, { useState, useEffect } from 'react'
import { fetchCustomers } from '../api/customerAPI.js'

const CustomerDropdown = ({ onCustomerChange }) => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        const loadCustomers = async () => {
            const response = await fetchCustomers()
            setCustomers(response.data)
        }
        loadCustomers()
    }, [])

    return (
        <div className="p-4 bg-white shadow-md rounded mb-4">
            <h2 className="text-xl font-bold mb-4">Select Customer</h2>
            <select
                onChange={(e) => onCustomerChange(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
            >
                <option value="">-- Select Customer --</option>
                {customers.map(customer => (
                    <option key={customer._id} value={customer._id}>
                        {customer.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CustomerDropdown
