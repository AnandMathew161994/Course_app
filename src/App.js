import logo from './logo.svg';
import './App.css';
import Signup from './components/singup';
import Signin from './components/Singin'
import Appbar1 from './components/appbar1';
import Add_course from './components/Add_course';
import {  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Courseadded from './components/course_added';
import Viewcourses from './components/viewcourses';
import { RecoilRoot } from 'recoil';



function App() {
  return (
<RecoilRoot>
  
<BrowserRouter>
    <Routes>
    <Route path="/" element= {<Appbar1/>} />
      <Route path="/signin" element= {<Signin/>} />
      <Route path="/singup" element={<Signup/>}/>
      <Route path="/course_add" element={<Add_course/>}/>
      <Route path="/course_added" element={<Courseadded/>}/>
      <Route path="/allcourses" element={<Viewcourses/>}/>
    </Routes>
    </BrowserRouter>
</RecoilRoot>
   )
  
}

export default App;
