import './App.css'
import Navbar from './components/Navbar'
import Billing from './pages/Billing'
import Customer from './pages/Customer'
import Product from './pages/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Router>

        <Navbar />

        <Routes>

          <Route path='/' exact element={<Customer />} />
          <Route path='/product' element={<Product />} />
          <Route path='/billing' element={<Billing />} />
        </Routes>

      </Router>

    </>
  )
}

export default App
