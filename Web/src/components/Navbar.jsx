import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex justify-around items-center h-14 bg-blue-500 text-white font-normal w-screen">

            <div className="">
                <Link
                    to={'/'}>
                    <h2
                        className='font-bold  cursor-pointer text-2xl'>Billing Service</h2>
                </Link>
            </div>

            <div>
                <ul className="flex justify-evenly items-center gap-20 text-lg">
                    <Link
                        to={'/'}>
                        <li
                            className='cursor-pointer'>Customer</li>
                    </Link>
                    <Link to={'/product'}>
                        <li
                            className='cursor-pointer'>Product</li>
                    </Link>
                    <Link to={'/billing'}>
                        <li
                            className='cursor-pointer'>Billing</li>
                    </Link>
                </ul>
            </div>
            <div>
                {/* image */}
            </div>


        </nav>
    )
}

export default Navbar