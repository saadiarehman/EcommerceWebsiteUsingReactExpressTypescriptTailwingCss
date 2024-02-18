import InputControl from "../../components/inputControl/InputControl"
import logoImage from "../../assets/partshop.png"

function ForgotPasswordOtp() {
  return (
    <div className="W-screen h-screen flex bg-gray-200">
        <div className="w-4/6 h-full   flex items-center justify-center">
             <img src={logoImage} alt="" className="h-3/4 w-1/2" /> 
            
        </div>
        <div className="w-2/6 flex items-center  ">
          <div className="w-3/4 h-3/4  shadow-gray-500 shadow-2xl bg-white flex justify-center items-center">
              <div className="w-3/4 h-3/4 ">
                  <div className="flex justify-center items-center">
                  <p className="text-black-500 font-bold text-4xl border-t-0 border-x-0  w-full">Forget Password
                    <div className="border-2 border-b-black w-5/6 mt-3 ml-5">
                    </div>
                  </p>

                  </div>
                  <div className="mt-10">
                  <InputControl placeholder="OTP" className=" text-xl w-full p-2" />
                  <InputControl placeholder="New Password" className=" text-xl w-full p-2"  />
                  <InputControl placeholder="Confirm Password" className=" text-xl w-full p-2"  />
                  </div>
                 
                  
                  <div className="flex justify-center items-center mt-10">
                  <button className="text-black-500 font-semibold text-lg bg-black text-white w-full rounded-lg p-2 mt-10" >SUBMIT</button>
                  </div>
                  
              </div>
          </div>
        </div>
        <div>

        </div>
       
    </div>
  )
}

export default ForgotPasswordOtp