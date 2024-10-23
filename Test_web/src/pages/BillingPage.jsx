import React from 'react'
import BillingForm from '../components/BillingForm.jsx'
import BillingList from '../components/BillingList.jsx'  // For viewing and editing billing

const BillingPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Billing System</h1>
            <BillingForm />
            <BillingList />  {/* This component can display the list of billings */}
        </div>
    )
}

export default BillingPage
