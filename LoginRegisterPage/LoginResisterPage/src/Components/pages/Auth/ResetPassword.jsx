import { TextField,Button,Box,Alert, Grid } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const ResetPassword = () => {

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
      NewPassword : data.get('NewPassword'),
      Confirm_Password : data.get('Confirm_Password')// under get we write (name) in form wala
    }
    if(actualData.NewPassword && actualData.Confirm_Password){
      if(actualData.NewPassword === actualData.Confirm_Password)
      {console.log(actualData);
      document.getElementById('password-reset-form').reset()
      setError({status :true,msg :" Password Successfully Changed",type:'success'})

      setTimeout(() => {
        navigate('/Login/Registeration') 
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
    <h1>Reset Password</h1>
    <Grid container justifyContent='center'> <Grid item sm={5} xs ={12} > 
     <Box component='form' noValidate sx ={{mt:2}} id="password-reset-form" onSubmit={handleSubmit}>
      <TextField margin="normal"required fullWidth id="NewPassword" name="NewPassword"label ='New Password' type="password"/>
      <TextField margin="normal"required fullWidth id="Confirm_Password" name="Confirm_Password"label ='Confirm Password'type="password"/>

      <Box textAlign= 'center'>
       <Button type ="submit" variant="conatined" sx ={{mt :3,mb:2,px:5 ,backgroundColor : '#B012AB', color:'white'}}>Change Password</Button>
      </Box>
      <NavLink to ='/'>Other Options</NavLink>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
    </Box>
    </Grid> 
    </Grid>
    </>
  )
}

export default ResetPassword