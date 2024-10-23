import React, { useEffect, useState } from 'react'
import { fetchCustomers } from '../api/customerAPI.js'

const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        const loadCustomers = async () => {
            const response = await fetchCustomers()
            setCustomers(response.data)
        }
        loadCustomers()
    }, [])

    return (
        <div className="p-4 bg-white shadow-md rounded mt-4">
            <h2 className="text-xl font-bold">Customers List</h2>
            <ul>
                {customers.map((customer) => (
                    <li key={customer._id} className="border-b p-2">
                        {customer.name} - {customer.contact}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CustomerList
