import React, { useState } from 'react'
import { addProduct } from '../api/productAPI.js'

const AddProductForm = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [brand, setBrand] = useState('')
    const [supplier, setSupplier] = useState('')
    const [oldStock, setOldStock] = useState(0)
    const [category, setCategory] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addProduct({ name, price, quantity, brand, supplier, oldStock, category })
        alert('Product added successfully')
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
            <h2 className="text-xl font-bold">Add Product</h2>
            <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} className="block w-full p-2 mb-2" />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="block w-full p-2 mb-2" />
            <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="block w-full p-2 mb-2" />
            <input type="text" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} className="block w-full p-2 mb-2" />
            <input type="text" placeholder="Supplier" value={supplier} onChange={(e) => setSupplier(e.target.value)} className="block w-full p-2 mb-2" />
            <input type="number" placeholder="Old Stock" value={oldStock} onChange={(e) => setOldStock(e.target.value)} className="block w-full p-2 mb-2" />
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} className="block w-full p-2 mb-2" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Product</button>
        </form>
    )
}

export default AddProductForm
