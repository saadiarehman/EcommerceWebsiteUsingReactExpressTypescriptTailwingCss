import { useState } from "react";
import { auth } from "../firebase";
import {  useNavigate } from "react-router-dom";
import sideLogoImage from "../assets/logoimage.png";
import topbarlogo1 from "../assets/topbarlogo1.png";
import topbarlogo2 from "../assets/topbarlogo2.png";
import topbarlogo3 from "../assets/topbarlogo3.png";
import Dashboard from '../pages/dashboard';
import OrderManagement from '../pages/OrderManagement';
import InventoryManagement from '../pages/InventoryManagement';
import Returns from '../pages/Returns';
import Feedback from '../pages/Feedback';
import Brands from '../pages/Brands';
import ActivityOverView from '../pages/ActivityOverView'
import PersonalInfo from "./PersonalInfo";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LandingPage(props) {
  const [activeComponent, setActiveComponent] = useState(<ActivityOverView />);
  const navigate=useNavigate();
  const handleItemClick = (component) => {
    setActiveComponent(component);
  };

  const handleSignOut = async () => {
    if(props.sellername){
      try {
        await auth.signOut();
        alert('User signed out');
        navigate("/auth/login");
        
      } catch (error) {
        console.error('Error signing out:', error);
      }
    }
    else{
    
      toast.info('Cannot SignOut !!!! No Seller User Signed In');
    }
    
  };
  const handleNotificationClick=()=>{
    
    toast.info('This is a notification!');
  }
  return (
    <div className="w-screen h-screen bg-gray-80">
      {/* nav bar */}
      <div className="w-full h-1/6 shadow-gray-500 shadow-md flex justify-between items-center">
        <div className="w-1/5 h-full ml-5 mt-5">
          <img src={sideLogoImage} alt="" />
        </div>
        <div className="text-3xl font-bold w-2/4 first-letter:capitalize">
          {props.sellername}
        </div>
        <div className="w-1/6 h-1/4 flex justify-center items-center">
          <p className="w-1/5 h-2/5">
            <img src={topbarlogo1} alt="" onClick={() => {
              handleItemClick(<PersonalInfo />);
            }} />
          </p>
          <p className="w-1/5 h-2/5">
            <img src={topbarlogo2} alt=""   onClick={handleNotificationClick}/>
          </p>
          <p className="w-1/5 h-2/5">
            <img src={topbarlogo3} onClick={handleSignOut} alt="" />
          </p>
        </div>
      </div>
      {/* side bar */}
      <div className="flex items-center justify-around h-4/5">
        <div className="w-1/5 border border-gray-200 shadow-gray-300 shadow-md 
                        flex flex-col items-center justify-center font-semibold">
          <div
            className="shadow-gray-300 shadow-md hover:bg-gray-300 w-full h-1/6 p-5"
            onClick={() => handleItemClick(<Dashboard />)}
          >
            Dashboard
          </div>
          <div
            className="shadow-gray-300 shadow-md hover:bg-gray-300 w-full h-1/6 p-5"
            onClick={() => handleItemClick(<OrderManagement />)}
          >
            Order Management
          </div>
          <div
            className="shadow-gray-300 shadow-md hover:bg-gray-300 w-full h-1/6 p-5 bg-gray-100"
            onClick={() => handleItemClick(<InventoryManagement />)}
          >
            Inventory Management
          </div>
          <div
            className="shadow-gray-300 shadow-md hover-bg-gray-300 w-full h-1/6 p-5"
            onClick={() => handleItemClick(<Returns />)}
          >
            Returns
          </div>
          <div
            className="shadow-gray-300 shadow-md hover:bg-gray-300 w-full h-1/6 p-5"
            onClick={() => handleItemClick(<Feedback />)}
          >
            Feedback
          </div>
          <div
            className="shadow-gray-300 shadow-md hover:bg-gray-300 w-full h-1/6 p-5"
            onClick={() => handleItemClick(<Brands />)}
          >
            Brands
          </div>
        </div>
        <div className="w-4/6 h-full mt-10 border border-gray-200  bg-white shadow-gray-300 shadow-lg rounded-lg ">
          {activeComponent}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
