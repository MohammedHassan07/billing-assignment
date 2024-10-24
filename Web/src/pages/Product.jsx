import React, { useState, useEffect } from 'react'
import { postRequest, getRequest } from '../utils/networkRequest'
import ProductCard from '../components/ProductCard.jsx'

const Product = () => {

  const [products, setProducts] = useState([])
  const [response, setResponse] = useState({})
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [brand, setBrand] = useState('')
  const [suplier, setSuplier] = useState('')
  const [oldStock, setOldStock] = useState('')
  const [category, setCategory] = useState('')

  async function handleDeleteCard(id) {
    console.log(id)
    const response = await getRequest(`/product/delete/${id}`)
    console.log(response)
}
  useEffect(() => {

    async function getAllProducts() {

      const response = await getRequest('/product/view')
      console.log(response.data)
      setProducts(response.data)
    }

    getAllProducts()

  }, [])

  async function handleAddProduct() {

    const data = { productName, productPrice, quantity, brand, suplier, oldStock, category }

    const response = await postRequest('/product/add', data)
    setResponse(response)

    setTimeout(() => {

      setResponse({})
    }, 2000)

  }

  function handleChange(e, type) {

    switch (type) {

      case 'productName':
        setProductName(e.target.value)
        console.log(productName)
        break

      case 'productPrice':
        setProductPrice(e.target.value)
        console.log(productPrice)
        break

      case 'quantity':
        setQuantity(e.target.value)
        console.log(quantity)
        break

      case 'brand':
        setBrand(e.target.value)
        console.log(brand)
        break

      case 'suplier':
        setSuplier(e.target.value)
        console.log(suplier)
        break

      case 'oldStock':
        setOldStock(e.target.value)
        console.log(oldStock)
        break

      case 'productcategory':
        setCategory(e.target.value)
        console.log(category)
        break
    }
  }

  return (
    <div className='flex items-center justify-center'>

      {/* aside */}
      <aside className='bg-blue-400 w-[40vw] h-screen p-4 flex flex-col justify-start items-center gap-6'>

        <input onChange={(e) => { handleChange(e, 'productName') }} className='bg-slate-200 px-3 py-1 border-2 border-blue-500 rounded-md text-black focus:outline-none w-full' type="text" placeholder='Product Name' />

        <input onChange={(e) => { handleChange(e, 'productPrice') }} className='bg-slate-200 px-3 py-1 border-2 border-blue-500 rounded-md text-black focus:outline-none w-full' type="number" placeholder='Price' />

        <input onChange={(e) => { handleChange(e, 'quantity') }} className='bg-slate-200 px-3 py-1 border-2 border-blue-500 rounded-md text-black focus:outline-none w-full' type="number" placeholder='Qunantity' />

        <input onChange={(e) => { handleChange(e, 'brand') }} className='bg-slate-200 px-3 py-1 border-2 border-blue-500 rounded-md text-black focus:outline-none w-full' type="text" placeholder='Brand' />

        <input onChange={(e) => { handleChange(e, 'suplier') }} className='bg-slate-200 px-3 py-1 border-2 border-blue-500 rounded-md text-black focus:outline-none w-full' type="text" placeholder='Suplier' />

        <input onChange={(e) => { handleChange(e, 'oldStock') }} className='bg-slate-200 px-3 py-1 border-2 border-blue-500 rounded-md text-black focus:outline-none w-full' type="number" placeholder='Old Stock' />

        <input onChange={(e) => { handleChange(e, 'productcategory') }} className='bg-slate-200 px-3 py-1 border-2 border-blue-500 rounded-md text-black focus:outline-none w-full' type="text" placeholder='Category' />

        <p className='text-white'>{response.message}</p>

        <button onClick={handleAddProduct} className='rounded  border-blue-600 p-1 px-3 mx-1 hover:bg-blue-500 hover:text-white shadow-lg'>Add Product</button>

      </aside>

      {/* main */}
      <main className='w-[100%] h-screen flex flex-wrap items-start justify-start p-6 gap-4'>



        {products ? products.map((product) => (
          <ProductCard key={product._id} product={product} handleDeleteCard={handleDeleteCard}/>
        )) : 
        <h1>No product found</h1>
        }

      </main>

    </div>
  )
}

export default Product
