import { TextField,Button,Box,Alert, FormControlLabel, Checkbox, } from "@mui/material";

import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const UserRegister = () => {

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
      name : data.get('name'),// under get we write (name) in form wala
      email : data.get('email'),
      password : data.get('password'),
      password_confirm: data.get('password_confirm'),
      tc: data.get('tc'),
    }
    if(actualData.email && actualData.password && actualData.name && actualData.tc){
      if(actualData.password === actualData.password_confirm)
     { console.log(actualData);
      document.getElementById('Register-info').reset()// if u click login if data not match u write again 
      setError({status :true,msg :"Registration Success",type:'success'})

      setTimeout(() => {
        navigate('/profile')       
      }, 3000);

     }
      else{
        setError({status :true,msg :"Password Not Match",type:'error'})
      }
    }else{
      setError({status :true,msg :"All Fields are Required",type:'error'})
    }
  }
  return (
    <>
    <Box component='form' noValidate sx ={{mt:2}} id="Register-info" onSubmit={handleSubmit}>
      <TextField margin="normal"required fullWidth id="name" name="name"label ='Name'/>
      <TextField margin="normal"required fullWidth id="email" name="email"label ='Email Adress'/>
      <TextField margin="normal"required fullWidth id="password" name="password"label ='New Password'type="password"/>
      <TextField margin="normal"required fullWidth id="password_confirm" name="password_confirm"label ='Confirm Password'type="password"/>

      <FormControlLabel control ={< Checkbox value="agree" Color='primary'name ='tc' id ='tc' />} label =" I agree to term and condition."/>

      <Box textAlign= 'center'>
       <Button type ="submit" variant="conatined" sx ={{mt :3,mb:2,px:5 ,backgroundColor : '#B012AB', color:'white'}}>Sign Up</Button>
      </Box>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
    </Box>
    </>
  )
}

export default UserRegister