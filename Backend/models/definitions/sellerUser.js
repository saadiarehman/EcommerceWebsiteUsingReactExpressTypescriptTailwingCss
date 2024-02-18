const sequelize =require ("../../bin/dbConnection");
const {Model, DataTypes}=require("sequelize");


class SellerUser extends Model{}


SellerUser.init({


    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    fname:{
        allowNull:false,
        type:DataTypes.STRING
    },
    lname:{
        allowNull:false,
        type:DataTypes.STRING
    },
    username:{
        allowNull:false,
        type:DataTypes.STRING
    },
    password:{
        allowNull:false,
        type:DataTypes.STRING
    },
    email:{
        allowNull:false,
        type:DataTypes.STRING
    },
    mobilenum:{
        allowNull:false,
        type:DataTypes.STRING
    }


},{
    paranoid:true,
    sequelize,
    timestamps:true,
    modelName:"SellerUser"
})


module.exports=SellerUser;

