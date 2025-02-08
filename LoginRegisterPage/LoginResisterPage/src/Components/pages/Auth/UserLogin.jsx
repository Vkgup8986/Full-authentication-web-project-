import { TextField,Button,Box,Alert } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
//onSubmit={handleSumbit}

const UserLogin = () => {

  const [error,setError] = useState({
    status : false,
    msg : "",
    type : "",
  })

    const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();// isko dene se gol gol nhi gume ga login click karenge to

    const data = new FormData(e.currentTarget);// isko tum (state) bna ke lik skta hai
    const actualData = {
      email : data.get('email'),
      password : data.get('password')// under get we write (name) in form wala
    }
    if(actualData.email && actualData.password){
      console.log(actualData);
      document.getElementById('Login-info').reset()
      setError({status :true,msg :"Login Success",type:'success'})

      setTimeout(() => {
        navigate('/profile') 
      }, 3000);
      
    }else{
      setError({status :true,msg :"All Fields are Required",type:'error'})
    }
  }
  return (
    <>
    <Box component='form' noValidate sx ={{mt:2}} id="Login-info" onSubmit={handleSubmit}>
      <TextField margin="normal"required fullWidth id="email" name="email"label ='Email Adress'/>
      <TextField margin="normal"required fullWidth id="password" name="password"label ='Password'type="password"/>

      <Box textAlign= 'center'>
       <Button type ="submit" variant="conatined" sx ={{mt :3,mb:2,px:5 ,backgroundColor : '#B012AB', color:'white'}}>Login</Button>
      </Box>
      <NavLink to ='/emailResetPassword'>Forgot Password ?</NavLink>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
    </Box>
    </>
  )
}

export default UserLogin