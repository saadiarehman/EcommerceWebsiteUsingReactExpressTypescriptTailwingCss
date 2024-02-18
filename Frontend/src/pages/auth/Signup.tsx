import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "../../components/inputControl/InputControl";
import logoImage from "../../assets/partshop.png";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../../firebase"
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {
  const navigate=useNavigate();
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password:"",
    mobilenum: "",
  });
  const [errorMsg, setErrorMsg]=useState()
  const [signupButtonDisabled, setSignupButtonDisabled]=useState(false)
  const handleSignup = () => {
    setSignupButtonDisabled(true);
    if (!values.fname || !values.lname || !values.email || !values.mobilenum || !values.username || !values.password) {
      setErrorMsg("Please Fill All Fields to complete SignUp Form");
      setSignupButtonDisabled(false);
      return;
    } else {
      setErrorMsg("");
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(async (res) => {
          const user = res.user;
          console.log(user);
          await updateProfile(user, {
            displayName: `${values.fname} ${values.lname}`
          });
          
          toast.info('Signup successful!');
        
          console.log("Signup successful");
          console.log(user.displayName);
          console.log("values",values);
          
        
          navigate("/");
         
        })
        .catch((err) => {
          setErrorMsg(err.message);
        })
        .finally(async () => {
          setSignupButtonDisabled(false);
          const loginRes = await axios.post("http://localhost:3000/auth/signup", {
            fname: values.fname,
            lname: values.lname,
            username: values.username,
            password: values.password,
            mobilenum: values.mobilenum,
            email:values.email
        });
        console.log(loginRes);
        });
    }
  };
  return (
    <div className="w-full h-screen flex bg-gray-200">
      <div className="w-4/6 h-full flex items-center justify-center">
        <img src={logoImage} alt="" className="h-3/4 w-1/2" />
      </div>
      <div className="w-2/6 flex items-center">
        <div className="w-3/4 h-4/5 shadow-gray-500 shadow-2xl bg-white flex justify-center items-center">
          <div className="w-3/4 h-3/4">
            <div className="flex justify-center items-center">
              <p className="text-black-500 font-bold text-4xl border-t-0 border-x-0 w-1/2">
                Sign Up
                <div className="border-2 border-b-black w-full "></div>
              </p>
            </div>
            <div className="">
              <InputControl
                placeholder="First Name"
                className="text-lg w-full p-2"
                onChange={(event) => {
                  setValues((prev) => ({
                    ...prev,
                    fname: event.target.value,
                  }));
                }}
              />
              <InputControl
                placeholder="Last Name"
                className="text-lg w-full p-1"
                onChange={(event) => {
                  setValues((prev) => ({
                    ...prev,
                    lname: event.target.value,
                  }));
                }}
              />
              <InputControl
                placeholder="Username"
                className="text-lg w-full p-1"
                onChange={(event) => {
                  setValues((prev) => ({
                    ...prev,
                    username: event.target.value,
                  }));
                }}
              />
              <InputControl
                placeholder="Email"
                className="text-lg w-full p-1"
                onChange={(event) => {
                  setValues((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }));
                }}
              />
              <InputControl
                placeholder="Password"
                className="text-lg w-full p-1"
                onChange={(event) => {
                  setValues((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }));
                }}
              />
              <InputControl
                placeholder="Mobile Number"
                className="text-lg w-full p-1"
                onChange={(event) => {
                  setValues((prev) => ({
                    ...prev,
                    mobilenum: event.target.value,
                  }));
                }}
              />
            </div>
            <p className="text-red-500 text-xs font-semibold">{errorMsg}</p>
            <div className="flex justify-center items-center mt-3">
              <button
                className="text-black-500 font-semibold text-lg
                 bg-black text-white w-full rounded-md p-2 disabled:bg-gray-400"
                onClick={handleSignup}
                disabled={signupButtonDisabled}
              >
                Sign Up
              </button>
            </div>
            <p className="text-sm font-semibold">
              Already have an Account?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
