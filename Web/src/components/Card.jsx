import React from 'react'

const Card = (customer, key) => {

    return (
        <div key={customer._id}
            className="bg-slate-200 border-blue-500 border-2 rounded-lg flex flex-col justify-evenly  w-1/4 h-48 hover:cursor-pointer p-4">

            <div className='flex'>

                <div className="text-lg">
                    <p className='mt-4'>Name: {customer.customer.name}</p>
                    <p className='mt-4'>Email: {customer.customer.email}</p>
                    <p className='mt-4'>Contact: {customer.customer.contact}</p>
                    <p className='mt-4'>Gender: {customer.customer.gender}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
