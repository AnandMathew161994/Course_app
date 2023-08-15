
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { bgcolor, color, Container } from '@mui/system';

import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/system';
import { useNavigate } from "react-router-dom";

function Appbar1() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>

         
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Coursera
        </Typography>
        <Button color="inherit" onClick={()=>navigate('/signin')}>Login</Button>
        <Button color="inherit" onClick={()=>navigate('/singup')}>Singup</Button>
      </Toolbar>
    </AppBar>
  </Box>
   )
  
}

export default Appbar1;
