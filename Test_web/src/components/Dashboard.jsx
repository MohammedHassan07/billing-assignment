import React, { useState, useEffect } from 'react'

const Dashboard = () => {
    const [totalSales, setTotalSales] = useState(0)
    const [totalRevenue, setTotalRevenue] = useState(0)

    useEffect(() => {
        // Fetch total sales and total revenue from the backend
        // Mocking the values here
        setTotalSales(100) 
        setTotalRevenue(5000) 
    }, [])

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Dashboard</h2>
            <div className="flex justify-between mt-4">
                <div className="p-4 bg-white shadow-md rounded">
                    <h3>Total Sales</h3>
                    <p>{totalSales}</p>
                </div>
                <div className="p-4 bg-white shadow-md rounded">
                    <h3>Total Revenue</h3>
                    <p>${totalRevenue}</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
