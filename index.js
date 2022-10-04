const express = require('express');
const app = express();
const cors=require('cors')
require('dotenv').config()
const dataBase =require('./middleware/db.config')
const port = process.env.PORT || 7000
const userRoute = require('./routes/user.route')
app.use(cors())
app.use(express.json())
app.set("view engine","ejs") 
app.use(express.urlencoded({extended:true}))

app.use('/api/user',userRoute)
const sql= require('./model/user.model')
//mysql connection
dataBase.authenticate() .then(()=>{
    //   sql.create({})
    console.log('connected')
})

//server
app.listen(port,()=>{
    console.log("sever listening on 8000 port")
})

