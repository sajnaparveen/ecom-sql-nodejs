// const mongoose = require('mongoose')
// const crypto = require('crypto')

// const userSchema = new mongoose.Schema({
//     uuid:{type:String,required:false},
//     userName:{type:String,required:true}
//     // email:{type:String,required:true},
//     // mobileNumber:{type:Number,required:true},
//     // profileImage:{type:String,required:false},
//     // role:{type:String,enum:['user','admin'],required:true,default:'user'},
//     // address:[{name:{type:String,required:false},
//     //     doorNo:{type:String,required:true},
//     //     streetname:{type:String,required:false},
//     //     landmark:{type:String,required:true},
//     //     city:{type:String,required:true},
//     //     country:{type:String,required:true},
//     //     state:{type:String,required:true},
//     //     addressType:{type:String,required:true}
//     //       }],
//     // loginStatus:{type:Boolean,required:false,default:false},
//     // emailVerification:{type:Boolean,required:false,default:false}      
   
// },{
//     timestamps:true
// })
// userSchema.pre('save',function(next){
//     this.uuid = 'USER-' + crypto.pseudoRandomBytes(4).toString('hex').toLocaleUpperCase()
//     next();
// })

// module.exports = mongoose.model('user',userSchema,'user')

const sequelize= require('sequelize')
const dataBase = require('../middleware/db.config')

const userSchema = dataBase.define('user',{
id:{type:sequelize.INTEGER,primaryKey:true,autoIncrement:true},
userName:{type:sequelize.STRING,allowNull:false},
active:{type:sequelize.BOOLEAN,defaultValue:false},
role:{type:sequelize.STRING,ENUM:['admin','user'], defaultValue:'user' }
})
userSchema.sync({force:false});

module.exports=userSchema;