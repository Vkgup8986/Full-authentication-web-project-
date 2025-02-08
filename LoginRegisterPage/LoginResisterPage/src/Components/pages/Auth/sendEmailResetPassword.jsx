import { TextField,Button,Box,Alert, Grid } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const sendEmailResetPassword = () => {
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
      
    }
    if(actualData.email ){
      console.log(actualData);
      document.getElementById('password-email-reset-form').reset()
      setError({status :true,msg :"New Password Confirmation Email Send to Respective Email",type:'success'})
      navigate('/Login/Registeration')
    }else{
      setError({status :true,msg :"Plese Type Valid Email",type:'error'})
    }
  }
  return (
    <>  
    <Grid container justifyContent='center'> <Grid item sm={5} xs ={12} > 
     <Box component='form' noValidate sx ={{mt:2}} id="password-email-reset-form" onSubmit={handleSubmit}>
      <TextField margin="normal"required fullWidth id="email" name="email"label ='email' />

      <Box textAlign= 'center'>
       <Button type ="submit" variant="conatined" sx ={{mt :3,mb:2,px:5 ,backgroundColor : '#B012AB', color:'white'}}>send</Button>
      </Box>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
    </Box>
    </Grid> 
    </Grid>
    </>
  )
}

export default sendEmailResetPassword