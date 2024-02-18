const sequelize=require("../bin/dbConnection");
const SellerUser=require("./definitions/sellerUser")
const AddProducts=require("./definitions/AddProducts")


const models={SellerUser,AddProducts}


const db={}




db.sequelize=sequelize;




module.exports={models,db}
