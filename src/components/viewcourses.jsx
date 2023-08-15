import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { margin } from '@mui/system';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import recoil, { atom,RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'

import { useNavigate
 } from 'react-router-dom';

export default function Viewcourses(){
    const navigate = useNavigate();


return( 
    <RecoilRoot>
        <Init/>
        <div  style={{
        backgroundColor : 'grey', height : '100vh', width: '100vw' , margin: '0px' ,padding : '0px' }}>
        {console.log("upper loop")}
        {/* <div>
        <AppBar position="static"   >
        <Toolbar>
         
          <Button color="inherit" onClick={()=>{ navigate("/course_add")}}> Go Back</Button>
        </Toolbar>
      </AppBar>
        </div> */}

        
        <Viewallcourses >
        </Viewallcourses>
    </div> 
    </RecoilRoot>
)
}


function Viewallcourses(){
    let course =useRecoilValue(courseState)
    if (course.length!=0){
        return(
            
            <div style={{backgroundColor : 'grey', display : 'flex',flexWrap : 'wrap' , justifyContent : "center"}}>
                {console.log("card loop")}
                { course.map((a)=>{
                            return (
                                <Box sx={{ marginTop : 30, display : "flex" , justifyContent : "center", margin : 2}}>   
                                <Card sx={{width: 300 , minHeight : 200 , display : "flex" , justifyContent : "center" } }><div>
                            <Typography sx={{ display : "flex" ,justifyContent : "center",Align : "Center"}}>  {a.title} </Typography>
                            <br/>
                            <img src={a.Image}></img>
                            
                            <br></br>
                            </div>
                            </Card>
                            <br></br>
                </Box>)
                            
                        }) }
           
            </div>
        )}
    else {
        return <div>
            Loading......
        </div>
    }
}


function Init(){
    let setCourses =  useSetRecoilState(courseState)
        fetch("http://localhost:4000/admin/courses",{headers: 
                    {'Content-Type' : 'application/json', 'Authorization' : 'Bearer ' + localStorage.getItem("token")  }}).
            then((res)=>{res.json().
                then((data)=>{setCourses(data)})})

       return <> </>         
    
}

const courseState = atom({
    key: 'courseState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });


