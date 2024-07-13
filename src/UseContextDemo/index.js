import React, { useState } from 'react'
import Dashboard from '../Dashboard'
import { DashboardContext } from './context'

export default function UseContextDemo() {
    const [user] = useState({
        isSubscribed: true,
        name: "You"
    })
    
    return (
        <div>
            <DashboardContext.Provider value={user}>
                <Dashboard />
            </DashboardContext.Provider>
        </div>
    )
}
