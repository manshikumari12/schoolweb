import React from 'react'
import Home from '../Pages/Home'
import { Routes,Route } from 'react-router-dom';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';

function Allrouters() {
  return (
    <div>
        <Routes>
            <Route path='/' element={  <Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>

        </Routes>
    
    </div>
  )
}

export default Allrouters
