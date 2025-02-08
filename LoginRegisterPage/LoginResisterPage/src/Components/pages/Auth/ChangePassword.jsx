import { TextField,Button,Box,Alert } from "@mui/material";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const ChangePassword = () => {
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
      
      password : data.get('password'),
      password_confirm: data.get('password_confirm'),
      
    }
    if(actualData.password && actualData.password_confirm ){
      if(actualData.password === actualData.password_confirm)
     { console.log(actualData);
      document.getElementById('password-change-form').reset()// if u click login if data not match u write again 
      setError({status :true,msg :"Password Change Successfully",type:'success'})

      setTimeout(() => {
        navigate('/login/Registeration')       
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
    <Box sx={{display:'flex',flexDirection:'column' ,mx :5, maxWidth:'600',flexWrap :'wrap' }}>
      <h1>Change Password</h1>
    
    <Box component='form' noValidate sx ={{mt:2}} id='password-change-form' onSubmit={handleSubmit}>
      
      <TextField margin="normal"required fullWidth id="password" name="password"label ='New Password'type="password"/>
      <TextField margin="normal"required fullWidth id="password_confirm" name="password_confirm"label ='Confirm Password'type="password"/>

      <Box textAlign= 'center'>
       <Button type ="submit" variant="conatined" sx ={{mt :3,mb:2,px:5 ,backgroundColor : '#B012AB', color:'white'}}>Change</Button>
      </Box>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
    </Box>
    </Box>
    </>
    
  )
}

export default ChangePassword