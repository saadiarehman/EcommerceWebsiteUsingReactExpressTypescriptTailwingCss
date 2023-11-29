
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPasswordOtp from "./pages/auth/ForgotPasswordOtp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import { useEffect, useState } from "react";
import {auth} from "../src/firebase"
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpasswordotp" element={<ForgotPasswordOtp />} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} /> 
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
