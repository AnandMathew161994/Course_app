
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { bgcolor, color, Container } from '@mui/system';

import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/system';

import React from 'react'
import Logoutbar from './logout';
import { useNavigate } from "react-router-dom";
import Courseadded from './course_added';
import Viewcourses from './viewcourses';
import recoil, { atom,RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'

function Add_course() {
  
   return (<>
   <One/>
    <Anand/>
       <Viewcourses/>
        </>
     )
    
  }
  
  export default Add_course;

  const titleState = atom({
    key: 'titleState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

  const descriptionState = atom({
    key: 'descriptionState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

  const xState = atom({
    key: 'xState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

 //const [Description,setDescription]= React.useState('')

 function One(){
  const navigate = useNavigate();
  let setDescription= useSetRecoilState(descriptionState)
  let Description = useRecoilValue(descriptionState)
  let setX= useSetRecoilState(xState)
  let x = useRecoilValue(xState)
  
 const [Title,setTitle]= React.useState('')

 const Imga= ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREabvR30BJaXiYN2Azwc8fPUWJmv1nzMatw9YIxxrygA&s",
"data:image/jpeg;base64,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",
"data:image/jpeg;base64,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"]
    return (
      <>
            
             <Logoutbar /> 
            <br/>
            <>
            <Button variant="contained" onClick={()=>{
              navigate("/allcourses")
            }} 
            
            > View All Courses</Button>
            </>
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
        <TextField 
                    fullWidth id="Username" 
                    label= "Title" variant="filled"  
                    onChange={(e)=>{setTitle(e.target.value)}}/>
       <br/><br/>
      <TextField fullWidth id="Password" label="Description" variant="filled"  
      onChange={(e)=>{ setDescription(e.target.value)
        }}/>
      <br/><br/>

     


      <Button variant="contained" sx={{m:1 }} 
        onClick={()=>{
            
            fetch("http://localhost:4000/admin/courses",{method: "POST", body : JSON.stringify({title : Title,
            description : Description ,Image : Imga[Math.floor(Math.random() *3)] }), headers : {'Content-Type' : 'application/json' , 
            'Authorization' : 'Bearer ' + localStorage.getItem("token")  }
            }).then((res)=>{ res.json().then((a)=>{
              if(a.message=='Successful'){
                setX('Added')
                window.location='/course_add'
              }else {
                  setX('Auth Failed')
              }
            })})
        }}  
      > Add Course</Button>
      <br/>
        </Box>
       <div satyle={{color :'red'}}>
        {x}
       </div>
    </div>
    </>      
    )}
















 function Anand(){

  return<>
  <Box>
 <Typography variant='h5'> Add new Courses</Typography>
        </Box>
  </>
 }