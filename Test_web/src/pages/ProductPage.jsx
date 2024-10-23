import React from 'react'
import AddProductForm from '../components/AddProductForm.jsx'
import ProductList from '../components/ProductList.jsx'

const ProductPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>
            <AddProductForm />
            <ProductList />
        </div>
    )
}

export default ProductPage
