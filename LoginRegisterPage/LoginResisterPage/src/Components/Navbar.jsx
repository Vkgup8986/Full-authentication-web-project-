import React from 'react'
import {AppBar,Box,Toolbar,Typography,Button} from '@mui/material'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Box sx={{flexGrow:1}}>
      <AppBar position='static' color='secondary'>
        <Toolbar>
          <Typography variant='h5' component='div' sx ={{flexGrow :1}}>
            MessKhata
          </Typography>

          {/* Text Capital me tha to textTransform none kiye jisse first cap me baki sab small me , component ka use kiye hai button ko link bnane ke liye ye sab router 6 me ayega  */}
          <Button style={({isActive}) =>{return {backgroundColor : isActive ? '#6d1b7b' : ''}}} sx={{color :'white', textTransform : 'none'}} component = {NavLink} to ='/'>Home</Button>

          <Button style={({isActive}) =>{return {backgroundColor : isActive ? '#6d1b7b' : ''}}} sx={{color :'white', textTransform : 'none'}} component = {NavLink} to ='/contact'>Contact</Button>

          <Button style={({isActive}) =>{return {backgroundColor : isActive ? '#6d1b7b' : ''}}} sx={{color :'white', textTransform : 'none'}} component = {NavLink} to ='/Login/Registeration'>Login/Registeration</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar