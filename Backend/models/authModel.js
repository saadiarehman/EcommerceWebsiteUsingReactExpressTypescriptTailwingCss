const {models}=require ("./index");

module.exports={

signUp:async (body)=>{
    try {
       console.log(body);
        const selleruser= await models.SellerUser.create({
            ...body,
        });
        return selleruser;
    
    } catch (error) {
        return error;
    }
   
},

}