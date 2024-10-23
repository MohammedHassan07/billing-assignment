import React, { useState, useEffect } from 'react'
import { fetchProducts } from '../api/productAPI.js'

const ProductList = ({ onProductChange }) => {
    const [products, setProducts] = useState([])
    const [selectedProducts, setSelectedProducts] = useState([])

    useEffect(() => {
        const loadProducts = async () => {
            const response = await fetchProducts()
            setProducts(response.data)
        }
        loadProducts()
    }, [])

    // Handle product selection and quantity changes
    const handleProductSelection = (productId, quantity) => {
        const existingProduct = selectedProducts.find(product => product.productId === productId)
        if (existingProduct) {
            const updatedProducts = selectedProducts.map(product =>
                product.productId === productId ? { ...product, quantity } : product
            )
            setSelectedProducts(updatedProducts)
        } else {
            setSelectedProducts([...selectedProducts, { productId, quantity }])
        }
        onProductChange([...selectedProducts, { productId, quantity }])
    }

    return (
        <div className="p-4 bg-white shadow-md rounded">
            <h2 className="text-xl font-bold mb-4">Select Products for Billing</h2>
            <div>
                {products.map(product => (
                    <div key={product._id} className="flex items-center justify-between mb-2">
                        <span>{product.name} - ${product.price}</span>
                        <input
                            type="number"
                            min="1"
                            placeholder="Quantity"
                            className="w-16 border border-gray-300 rounded p-1 ml-2"
                            onChange={(e) => handleProductSelection(product._id, e.target.value)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList
