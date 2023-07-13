import { useState } from 'react'
import './App.css'
import Home from './components/Home'
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
