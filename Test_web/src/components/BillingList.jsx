import React, { useState, useEffect } from 'react'
import { fetchBillings, deleteBilling } from '../api/billingAPI.js'

const BillingList = () => {
    const [billings, setBillings] = useState([])

    // Fetch all billing records
    useEffect(() => {
        const loadBillings = async () => {
            const response = await fetchBillings()
            setBillings(response.data)
        }
        loadBillings()
    }, [])

    // Handle deleting a billing record
    const handleDelete = async (billingId) => {
        if (window.confirm('Are you sure you want to delete this billing?')) {
            await deleteBilling(billingId)
            setBillings(billings.filter(bill => bill._id !== billingId))
        }
    }

    return (
        <div className="p-4 bg-white shadow-md rounded mt-4">
            <h2 className="text-xl font-bold mb-4">Billing Records</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">Customer Name</th>
                        <th className="py-2">Total Amount</th>
                        <th className="py-2">Products</th>
                        <th className="py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {billings.length > 0 ? (
                        billings.map((billing) => (
                            <tr key={billing._id} className="border-t">
                                <td className="py-2">{billing.customer.name}</td>
                                <td className="py-2">${billing.totalAmount}</td>
                                <td className="py-2">
                                    {billing.products.map((product, idx) => (
                                        <span key={idx}>{product.product.name} (x{product.quantity}), </span>
                                    ))}
                                </td>
                                <td className="py-2">
                                    <button
                                        onClick={() => handleDelete(billing._id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="py-4 text-center">
                                No billing records found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default BillingList
