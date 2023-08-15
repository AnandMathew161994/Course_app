
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { bgcolor, color, Container } from '@mui/system';
import {useNavigate} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/system';
import React from 'react'
import axios from 'axios'
import {atom, useRecoilValue, useSetRecoilState } from 'recoil';

function Logoutbar() {
  const navigate = useNavigate();
  const name1 =useRecoilValue(nameState)
  
  return (
    
    <Box sx={{ flexGrow: 1 }}>
    <Inituser/>
    <AppBar position="static">
      <Toolbar>

         
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Coursera
        </Typography>

        <Box sx={{display : 'flex'}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {name1}
        </Typography>
        <br/> <br/>
        <Button color="inherit" onClick={ () => {navigate("/signin")
                        localStorage.setItem("token",null)}}>Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
   )
  
}

export default Logoutbar;

const nameState = atom({
  key: 'nameState', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

function Inituser(){
  const setName1 =useSetRecoilState(nameState)
  fetch("http://localhost:4000/admin/me", { headers : {'Content-Type' : 'application/json' , 
  'Authorization' : 'Bearer ' + localStorage.getItem("token")  }}).then((res)=>{res.json().then((data)=>{setName1(data.name)})})
  
  return <>
  </>
}


