import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Website/Pages/Home'
import Live from './Website/Pages/Live'
import Features from './Website/Pages/Features'
import Blog from './Website/Pages/Blog'
import Shop from './Website/Pages/Shop'
import Contact from './Website/Pages/Contact'
import Login from './Website/Pages/Login'
import Signup from './Website/Pages/Signup'
import Profile from './Website/Pages/Profile'
import View_features from './Website/Pages/View_features'


import Adashboard from './Admin/Pages/Adashboard'
import Add_Games from './Admin/Pages/Add_Games'
import Edit_games from './Admin/Pages/Edit_games'
import Manage_Games from './Admin/Pages/Manage_Games'
import Add_Product from './Admin/Pages/Add_Product'
import Manage_Product from './Admin/Pages/Manage_Product'
import Alogin from './Admin/Pages/Alogin'
import Manage_User from './Admin/Pages/Manage_User'
import Manage_Contact from './Admin/Pages/Manage_Contact'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';








function App() {
  return (
    <div>
   

       <BrowserRouter>
       <ToastContainer />
       <Routes>
           {/* Website */}
          <Route path='/' element={<><Home/></>}></Route>
          <Route path='/live' element={<><Live/></>}></Route>
          <Route path='/features' element={<><Features/></>}></Route>
          <Route path='/view_features/:id' element={<><View_features/></>}></Route>
          <Route path='/blog' element={<><Blog/></>}></Route>
          <Route path='/shop' element={<><Shop/></>}></Route>
          <Route path='/contact' element={<><Contact/></>}></Route>
          <Route path="/signup" element={<><Signup/></>}></Route>
          <Route path="/login" element={<><Login/></>}></Route>
          <Route path="/profile" element={<><Profile/></>}></Route>
       



            {/* Admin */}

          <Route path='/adashboard' element={<><Adashboard/></>}></Route>
          <Route path='/add_games' element={<><Add_Games/></>}></Route>
          <Route path='/manage_games' element={<><Manage_Games/></>}></Route>
          <Route path='/edit_games/:id' element={<><Edit_games/></>}></Route>
          <Route path='/add_product' element={<><Add_Product/></>}></Route>
          <Route path='/manage_product' element={<><Manage_Product/></>}></Route>
          <Route path='/manage_contact' element={<><Manage_Contact/></>}></Route>
          <Route path='/user' element={<><Manage_User/></>}></Route>
          <Route path='/alogin' element={<><Alogin/></>}></Route>


       </Routes>
       </BrowserRouter>
    

    </div>
  )
}

export default App

