import React from 'react'
import deleteImg from '../../public/delete.png'

const ProductCard = ({ product, handleDeleteCard }) => {

    return (
        <div key={product._id}
            className="bg-slate-200 border-blue-500 border-2 rounded-lg flex flex-col justify-evenly hover:cursor-pointer p-2">

            <div className='flex'>

                <div className="text-lg">
                    <div className='flex justify-start items-center'>

                        <p className='mt-2'>Product Name: {product.productName}</p>
                        <p className='mt-2'>Brand: {product.brand}</p>
                    </div>
                    <div className='flex justify-start items-center gap-6'>

                        <p className='mt-2'>Old Stock: {product.oldStock}</p>
                        <p className='mt-2'>Product Price: {product.productPrice}</p>
                    </div>
                    <div className='flex justify-start items-center gap-6'>

                        <p className='mt-2'>Product Category: {product.productcategory}</p>
                        <p className='mt-2'>Quantity: {product.quantity}</p>

                    </div>
                    <div className='flex justify-start items-center gap-6'>

                        <p className='mt-2'>Suplier: {product.suplier}</p>
                        <img className='w-[27px]' src={deleteImg} onClick={() => {
                            handleDeleteCard(product._id)
                        }} />
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default ProductCard
