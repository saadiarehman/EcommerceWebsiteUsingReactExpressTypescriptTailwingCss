import InputControl from "../../components/inputControl/InputControl";
import logoImage from "../../assets/partshop.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(false);

  const handleLogin = () => {
    setLoginButtonDisabled(true);
    if (!values.email || !values.password) {
      setErrorMsg("Please Fill All Fields to complete Login Form");
      setLoginButtonDisabled(false);
      return;
    } else {
      setErrorMsg("");
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((res) => {
          setLoginButtonDisabled(false);
          console.log("Login successful");
          navigate("/");
          console.log(values);
        })
        .catch((err) => {
          setErrorMsg(err.message);
          setLoginButtonDisabled(false);
        });
    }
  };

  return (
    <div className="w-screen h-screen flex bg-gray-200">
      <div className="w-4/6 h-full flex items-center justify-center">
        <img src={logoImage} alt="" className="h-3/4 w-1/2" />
      </div>
      <div className="w-2/6 flex items-center">
        <div className="w-3/4 h-3/4 shadow-gray-500 shadow-2xl bg-white flex justify-center items-center">
          <div className="w-3/4 h-3/4 ">
            <div className="flex justify-center items-center">
              <p className="text-black-500 font-bold text-4xl border-t-0 border-x-0 w-1/3">
                Login
                <div className="border-2 border-b-black w-5/6 mt-3 ml-2"></div>
              </p>
            </div>
            <div className="mt-10">
              <InputControl
                placeholder="Email"
                className="text-xl w-full p-2"
                onChange={(event) => {
                  setValues((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }));
                }}
              />
              <InputControl
                placeholder="Password"
                className="text-xl w-full p-2"
                type="password"
                onChange={(event) => {
                  setValues((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }));
                }}
              />
            </div>

            <div className="flex justify-between text-gray-400 mt-10">
              <Link to={"/forgotpassword"}>Forget Password</Link>
              <Link to={"/auth/signup"}>Sign Up</Link>
            </div>
            <p className="text-red-500 text-xs font-semibold">{errorMsg}</p>
            <div className="flex justify-center items-center mt-10">
              <button
                className={`text-white font-semibold text-lg bg-black w-full rounded-lg p-2 ${
                  loginButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleLogin}
                disabled={loginButtonDisabled}
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
