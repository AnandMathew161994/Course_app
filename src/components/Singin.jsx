
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { bgcolor, color, Container } from '@mui/system';

import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/system';
import Appbar1 from './appbar1';
import React from 'react'
import { useNavigate } from 'react-router-dom';



function Signin() {
   const navigate = useNavigate();
   const [x,setX]= React.useState('')
   const [username,setUsername]=React.useState('')
   const [pass,setPass]=React.useState('')


    return (
      <>
      <Appbar1/>
      <div style ={{ marginTop : 200, marginLeft : 600}}>
      <Box sx={{
     width: 300,
    backgroundColor: 'primary.dark',
    color : 'white' 
   }}>
      <Typography variant='h5'>Welcome back</Typography>
      </Box>
      <br/>
      <Box sx={{
    width: 300,
    height: 300,
    backgroundColor: 'white',
    border: '1px  solid black' 
   }}> <br/><br/>      
      <TextField fullWidth id="Username" label="Username" variant="filled"  onChange={(e)=>{setUsername(e.target.value)}}/>
       <br/><br/>
      <TextField fullWidth id="Password" label="Password" variant="filled" onChange={(e)=>{setPass(e.target.value)}} />
      <br/><br/>
      <Button variant="outlined" sx={{m:1 }}  onClick={()=> 
        fetch("http://localhost:4000/admin/login",{method: "POST" ,body: JSON.stringify({username,password : pass}) , 
        headers : {'Content-Type' : 'application/json' }}).then((res)=>{res.json().then((data)=>{
         localStorage.setItem("token", data.token)
          if(data.message=='Successful'){
            navigate('/course_add')
          }else {
              setX('Auth Failed')
          }
        })})
          }>Sign In</Button>
      </Box>
      <div>
         {x}
      </div>
  </div>
      </>
     )
    
  }
  
  export default Signin;