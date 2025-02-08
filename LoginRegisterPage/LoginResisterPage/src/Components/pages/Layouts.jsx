import React from 'react'
import Navbar from '../Navbar'
// import Home from './Home'
import { Outlet } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

const Layouts = () => {
  return (
    <>
    <Navbar/>
    <CssBaseline/>
     <Outlet/> {/* kuki ki layout mere parent hai contact,home,loginRegistration Child hai,to Childs ko render karne  ke Outlet use karte h */}
    </>
  )
}

export default Layouts