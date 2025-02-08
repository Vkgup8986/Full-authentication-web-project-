// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Layouts from './Components/pages/Layouts'
import Home from "./Components/pages/Home";
import Contact from "./Components/pages/Contact";
import LoginReg from "./Components/pages/Auth/LoginReg";
import ResetPassword from "./Components/pages/Auth/ResetPassword";
import SendEmailResetPassword from "./Components/pages/Auth/sendEmailResetPassword";
import ProfilePage from "./Components/pages/ProfilePage";
// import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path = "/" element = {<Layouts/>}> 
        <Route index element = {<Home/>}/>
        <Route path = 'contact' element = {<Contact/>}/>
        <Route path = 'Login/Registeration' element = {<LoginReg/>}/>
        <Route path = 'reset' element = {<ResetPassword/>}/>
        <Route path = 'emailresetpassword' element = {<SendEmailResetPassword/>}/>
      </Route>
      <Route path = '/profile' element = {<ProfilePage/>}/>
      <Route path = '*' element = {<h1> Error 404 not Found || ye kya likh diya bhai wrong website name u type||</h1> }/>

     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
