import { BrowserRouter,Routes,Route } from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import Header from './component/Header';
import PrivateRoute from './component/PrivateRoute';
// import PrivateRoute from './component/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>

      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route element={<PrivateRoute/>}>
             <Route path="/profile" element={<Profile />}></Route>

      </Route>
</Routes>
    </BrowserRouter>
  )
}
