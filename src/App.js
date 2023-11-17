// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './Register'
import Login from './Login'
import Home from './Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import First from './first'
function App() {
  

  return ( 
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<SignUp/>}></Route>
        <Route exact path="/register" element={<SignUp/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
