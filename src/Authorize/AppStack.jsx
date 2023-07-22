import React from 'react'
import Home from '../pages/AppPages/Home'
import { Routes, Route, useParams } from 'react-router-dom'
import Loading from '../pages/AuthPages/Loading'

import AppNavBar from '../Navigation/appNavBar'

function AppStack() {
    const params = useParams()
    let userAtt = '/' + params.user
    console.log(params)
    return (
        <>
            <h1>AppStack</h1>
            <AppNavBar/>
            <Routes>

                
                <Route path={userAtt} element={<Home />} />
                {/* <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} /> */}
            </Routes>
        </>
    )
}

export default AppStack