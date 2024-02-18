const authModel=require("../models/authModel");
const bcrypt=require("bcrypt")

module.exports={
    signUp:async(body)=>{
        try {
            body.password=await bcrypt.hash(body.password,10);
          console.log(body);
            const selleruser=await authModel.signUp(body);
            console.log("user",selleruser);
            if(!selleruser){
                return "error"
            }
            return selleruser;
        } catch (error) {
            return error;
        }
    },
    
      
}