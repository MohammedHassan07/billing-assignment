import React, { useState } from 'react'
import CustomerDropdown from './CustomerDropdown'
import ProductList from './ProductList'
import { createBilling } from '../api/billingAPI.js'

const BillingForm = () => {
    const [selectedCustomer, setSelectedCustomer] = useState(null)
    const [selectedProducts, setSelectedProducts] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const billingData = {
            customerId: selectedCustomer,
            products: selectedProducts,
        }
        try {
            await createBilling(billingData)
            alert('Billing created successfully')
        } catch (error) {
            console.error(error)
            alert('Failed to create billing')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
            <h2 className="text-xl font-bold mb-4">Create Billing</h2>
            <CustomerDropdown onCustomerChange={setSelectedCustomer} />
            <ProductList onProductChange={setSelectedProducts} />
            <button
                type="submit"
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
                Submit Billing
            </button>
        </form>
    )
}

export default BillingForm
