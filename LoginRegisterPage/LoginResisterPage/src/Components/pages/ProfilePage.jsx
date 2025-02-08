import {Button,CssBaseline,Grid,Typography} from '@mui/material'
import {useNavigate  } from "react-router-dom";
import ChangePassword from './Auth/ChangePassword';

const ProfilePage = () => {
  const navigate = useNavigate();
  const handleLogout = () =>{
    console.log('Logout Clicked');
    navigate('/Login/Registeration')
  }
  return (
    <>
    <CssBaseline/>
    <Grid container>
      <Grid item sm ={4} sx ={{backgroundColor:'#6d1b7b',p:5,color :'white'}} >
        <h1>Profile</h1>
        <Typography variant='h5'>Email : vikasfirst@gmail.com</Typography>
        <Typography variant='h6'>Name : Vikash Gupta</Typography>
         
         <Button color='warning' size='large' variant='contained' onClick={handleLogout} sx={{mt:8}} >Logout</Button>
      </Grid>

      <Grid item container sm={8} >
        <ChangePassword/>
      </Grid>
    </Grid>
    
    
    </>
  )
}

export default ProfilePage