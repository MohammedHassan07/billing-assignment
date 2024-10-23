import React, { useState } from 'react'
import { addCustomer } from '../api/customerAPI.js'

const AddCustomerForm = () => {
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addCustomer({ name, gender, contact, email })
        alert('Customer added successfully')
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
            <h2 className="text-xl font-bold">Add Customer</h2>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="block w-full p-2 mb-2" />
            <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} className="block w-full p-2 mb-2" />
            <input type="text" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} className="block w-full p-2 mb-2" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 mb-2" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Customer</button>
        </form>
    )
}

export default AddCustomerForm
