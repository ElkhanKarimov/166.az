import React from 'react'
import Navbar from '../layout/Navbar/Navbar'
import Footer from '../layout/Footer/Footer'
import { Outlet } from 'react-router-dom'

const SiteRoot = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default SiteRoot