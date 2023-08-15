
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { bgcolor, color, Container } from '@mui/system';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import Logoutbar from './logout';



function Courseadded() {
   const navigate = useNavigate();

    return (
            <>
            
            <Logoutbar/>
        <div style ={{ marginTop : 200, marginLeft : 600}}>
      
        <Box sx={{
       width: 300,
      backgroundColor: 'primary.dark',
      color : 'white' 
     }}>
        <Typography variant='h5'> Add new Courses</Typography>
        </Box>
        <br/>
        <Box sx={{
      width: 300,
      height: 300,
      backgroundColor: 'white',
      border: '1px  solid black' 
     }}> <br/><br/>  
        
      <br/><br/>
      <Button variant="contained" sx={{m:1 }} 
        onClick={()=>{navigate('/course_add')}}  
      > Add another Course</Button>
      <br/>
    
        </Box>
       {}
    </div>
        </>
     )
    
  }
  
  export default Courseadded;