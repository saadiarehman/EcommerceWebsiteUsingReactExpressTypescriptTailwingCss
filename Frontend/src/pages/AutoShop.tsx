import topbarlogo2Notification from "../assets/navbariconnotificationwhite.png";
import navbarCartIcon from "../assets/nabvarCartWhite.png"
import navbarordericon from "../assets/navbarordericon.png"
import navbarsignouticon from "../assets/navbarSignouticon.png"
import { useNavigate } from "react-router-dom";

function AutoShop() {
  const navigate=useNavigate();
  const handleSignOutClick=()=>{
   
    navigate("/autoshoplogin");
  }
  return (
    <div className="w-full h-full">
        <div className="flex items-center justify-center ">
        <div className="w-2/3 flex justify-between ">
            <div className="text-2xl text-purple-500 font-bold mt-5">
            Part Shop
            </div>
            <div className="flex justify-evenly items-center w-1/2  font-semibold">
              <div className="flex items-center justify-center  h-1/2 w-1/4 hover:bg-gray-100 mt-5">
                <img src={topbarlogo2Notification} className="w-6 h-6 " alt="" />
                <div>
                Notifications
                </div>
               
              </div>
              <div className="flex items-center justify-center  h-1/2 w-1/4 hover:bg-gray-100 mt-5">
                <img src={navbarordericon} className="w-6 h-6 " alt="" />
                <div>
                Orders
                </div>
               
              </div>
              <div className="flex items-center justify-center  h-1/2 w-1/4 hover:bg-gray-100 mt-5">
                <img src={navbarCartIcon} className="w-6 h-6 " alt="" />
                <div>
                Cart
                </div>
               
              </div>
              
              <div className="flex items-center justify-center  h-1/2 w-1/4 hover:bg-gray-100 mt-5"  onClick={handleSignOutClick}>
                
                <img src={navbarsignouticon} className="w-6 h-6 " alt="" />
                <div >
                Sign Out
                </div>         
              </div>
             
            </div>
        </div>
        
        </div>
        <div className="flex items-center justify-center mt-10">
        <div className="w-2/3 flex justify-between border border-black ">
            
        </div>
        
        </div>
    </div>
  )
}

export default AutoShop