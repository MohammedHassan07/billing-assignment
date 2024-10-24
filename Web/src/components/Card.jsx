import React from 'react'

const Card = (customer) => {

    console.log(customer)
    return (
        <div key={customer._id}
            className="bg-slate-200 border-blue-500 border-2 rounded-lg flex flex-col justify-evenly  w-1/4 h-48 hover:cursor-pointer p-2">

            <div className='flex'>

                <div className="text-lg">
                    <p className='mt-2'>Name: {customer.customer.name}</p>
                    <p className='mt-2'>Email: {customer.customer.email}</p>
                    <p className='mt-2'>Contact: {customer.customer.contact}</p>
                    <p className='mt-2'>Gender: {customer.customer.gender}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
