const sequelize=require('sequelize');

const dataBase = new sequelize('ecom_node','root','',{
    host:"localhost",
    port:'3306',
    dialect:"mysql"  
})
sequelize.seq
module.exports = dataBase;