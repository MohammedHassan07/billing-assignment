import React from 'react'

const AppHeader = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <input
                type="text"
                placeholder="Search..."
                className="p-2 rounded bg-gray-700 text-white w-1/3"
            />
            <div className="flex items-center space-x-6">
                <button className="relative">
                    <i className="fas fa-bell"></i>
                </button>
                <div className="profile-section">
                    <i className="fas fa-user-circle text-2xl"></i>
                </div>
            </div>
        </header>
    )
}

export default AppHeader
