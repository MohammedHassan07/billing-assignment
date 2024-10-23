import React from 'react'
import AddCustomerForm from '../components/AddCustomerForm.jsx'
import CustomerList from '../components/CustomerList.jsx'

const CustomerPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Customer Management</h1>
            <AddCustomerForm />
            <CustomerList />
        </div>
    )
}

export default CustomerPage
