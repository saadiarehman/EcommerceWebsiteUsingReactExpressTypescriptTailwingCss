import InputControl from "../../components/inputControl/InputControl";
import logoImage from "../../assets/partshop.png";
import { useState } from "react";
import { auth, sendPasswordResetEmail } from "../../firebase";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const navigate=useNavigate();
  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Check your inbox!");
      setError(null);
    } catch (error) {
      setError(error.message);
      setMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default submission behavior
    handleResetPassword();
  };
  const handleClick=()=>{
    navigate('/forgotpasswordotp')
  }
  return (
    <div className="W-screen h-screen flex bg-gray-200">
      <div className="w-4/6 h-full flex items-center justify-center">
        <img src={logoImage} alt="" className="h-3/4 w-1/2" />
      </div>
      <div className="w-2/6 flex items-center">
        <div className="w-3/4 h-3/4  shadow-gray-500 shadow-2xl bg-white flex justify-center items-center">
          <div className="w-3/4 h-3/4 ">
            <div className="flex justify-center items-center">
              <p className="text-black-500 font-bold text-4xl border-t-0 border-x-0 w-full">
                Forget Password
                <div className="border-2 border-b-black w-5/6 mt-3 ml-5"></div>
              </p>
            </div>
            <div className="mt-10">
              <div >
                <InputControl
                  placeholder="Email"
                  className="text-xl w-full p-2 mt-10"
                  onChange={(e) => setEmail(e.target.value)}
                />
                
                <div className="flex justify-center items-center mt-10">
                  <button
                    className="text-black-500 font-semibold text-lg bg-black text-white w-full rounded-lg p-2"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </button>
                 
                  </div>
                  <div className="font-semiBold text-green-600 mt-10">
                  {message && <p>{message}</p>}
                  {error && <p>{error}</p>}
                </div>
                <button className="text-red-400" onClick={handleClick}>Reset Password Using OTP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
