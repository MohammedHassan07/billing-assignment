import React from 'react'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom'
import AppHeader from './components/AppHeader.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import CustomerPage from './pages/CustomerPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import BillingPage from './pages/BillingPage.jsx'
import './styles/tailwind.css'; 

const App = () => {
    return (
        <Router>
            <div className="bg-gray-100 min-h-screen">
                <AppHeader />
                <main className="container mx-auto p-4">
                    <Routes>
                        <Route path="/" exact component={DashboardPage} />
                        <Route path="/customers" component={CustomerPage} />
                        <Route path="/products" component={ProductPage} />
                        <Route path="/billing" component={BillingPage} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App
