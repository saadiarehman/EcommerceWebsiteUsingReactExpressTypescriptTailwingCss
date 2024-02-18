
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPasswordOtp from "./pages/auth/ForgotPasswordOtp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import AutoShop from "./pages/AutoShop";
import { useEffect, useState } from "react";
import {auth} from "../src/firebase"
import ToastContainerWrapper from './components/ToastContainerWrapper';
import AutoShopLogin from "./pages/AutoShopLogin";

function App() {
  const [isAuthenticated, setIsAuthenticated]=useState("")
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setIsAuthenticated(user.displayName||"")
      }
    })
  },[])

  return (
    <>

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage sellername={isAuthenticated}/>} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/forgotpasswordotp" element={<ForgotPasswordOtp />} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} /> 
          <Route path="/autoshoplogin" element={<AutoShopLogin />} /> 
          <Route path="/autoshop" element={<AutoShop />} /> 
          
      </Routes>
    </BrowserRouter>
    <ToastContainerWrapper />
    
     
    </>
  )
}

export default App
