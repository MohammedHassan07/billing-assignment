import React, { useEffect, useState } from 'react'
import { getRequest, postRequest } from '../utils/networkRequest.js'

const Customer = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setCOntact] = useState('')
    const [gender, setGender] = useState('')
    const [customers, setCustomers] = useState([])


    async function getAllCustomer() {
        const response = await getRequest('customer/view', 'GET')
        setCustomers(response)
    }

    useEffect(() => {

        // getAllCustomer()

    }, [])



    function handleChange(e, type) {

        switch (type) {

            case 'name':
                setName(e.target.value)
                console.log(name)
                break

            case 'email':
                setEmail(e.target.value)
                console.log(email)
                break

            case 'contact':
                setCOntact(e.target.value)
                console.log(contact)
                break

            case 'gender':
                setGender(e.target.value)
                console.log(gender)
                break
        }
    }

    async function handleAddCustomer() {

        const data = { name, email, contact, gender }

        const response = await postRequest('/customer/add', 'POST', data)
    }

    return (
        <div className='flex items-center justify-center'>

            {/* aside */}
            <aside className='bg-blue-400 w-[40vw] h-screen p-4 flex flex-col justify-start items-center gap-6'>

                <input onChange={(e) => { handleChange(e, 'name') }} className='bg-slate-200 px-3 py-1 border-2 border-blue-500 rounded-md text-black focus:outline-none w-full' type="text" placeholder='Name' />

                <input onChange={(e) => { handleChange(e, 'contact') }} className='bg-slate-200 px-3 py-1 border-2 border-blue-500 rounded-md text-black focus:outline-none w-full' type="text" placeholder='contact' />

                <input onChange={(e) => { handleChange(e, 'email') }} className='bg-slate-200 px-3 py-1 border-2 border-blue-500 rounded-md text-black focus:outline-none w-full' type="text" placeholder='email' />

                <input onChange={(e) => { handleChange(e, 'gender') }} className='bg-slate-200 px-3 py-1 border-2 border-blue-500 rounded-md text-black focus:outline-none w-full' type="text" placeholder='gender' />

                <button onClick={handleAddCustomer} className='rounded  border-blue-600 p-1 px-3 mx-1 hover:bg-blue-500 hover:text-white shadow-lg'>Add Cusotmer</button>

            </aside>

            {/* main */}
            <main className='w-[100%] bg-red-300 flex items-center justify-center flex-wrap'>


                {customers.map((customer, key) => (
                    <div key={customer.id} className="bg-slate-200 border-blue-500 border-2 rounded-lg flex flex-col justify-evenly items-center w-1/6 h-48 hover:cursor-pointer">
                        <div className="text-3xl text-blue-500">
                            <h3>{customer.name}</h3>
                        </div>
                        <div className="text-lg">
                            <h4>{customer.email}</h4>
                        </div>
                        <div className="text-lg">
                            <h4>{customer.contact}</h4>
                        </div>
                        <div className="text-lg">
                            <h4>{customer.gender}</h4>
                        </div>
                    </div>
                ))}


            </main>

        </div>
    )
}

export default Customer
