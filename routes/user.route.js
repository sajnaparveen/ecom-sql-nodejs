const router = require('express').Router();
const userSchema = require('../model/user.model')

//add user details
router.post("/addUser",async(req,res)=>{
    
         const datas = new userSchema(req.body);
        const data = datas.save().then(result=>{
            return res.json({'status':'success',message:"userData are successfully added","result":result})
        }).catch(err=>{
            res.json({status:'failure'})
        })     
    
})

//get all user details
router.get("/get-all-user",async(req,res)=>{
    try {
        console.log("trigger")
        const data = await userSchema.findAll()
        if(data.length > 0){
            return res.json({status:'success',"result":data})
        }else{
            return res.json({status:"failure"})
        }

    } catch (error) {
        return res.json({"err":error.message})
    }
})

//user login
router.post("/login",async(req,res)=>{
    try {
       console.log('sajna')
       console.log(req.body)
       const userName=req.body.userName
    //    const userdetails = await userSchema.findOne({ userName: userName })
    //      return res.status(200).json({status:'success',result:userdetails})
        //  or
      let username;
        username= await userSchema.findOne({active:false},{where:{userName:req.body.userName}})
        if(username){
            const update=  await userSchema.update({active:true},{where:{userName:req.body.userName}})
            return res.status(200).json({status:'success',result:username,update})
        }
    } catch (error) {
        return res.json({"err":error.message})
    }
})

//delete user details
router.delete('/delete-user',async(req,res)=>{
    try{
     await userSchema.destroy({where:{id:req.query.id}}).then(user=>{
        return res.status(200).json({status:"success",message:"deleted"})
     })
    }catch(error){
       console.log('err',error)
    }
})

router.put('/update-user-details',async(req,res)=>{
    try{
      let details={userName:req.body.userName}
      await userSchema.update(details,{where:{id:req.query.id}}).then(details=>{
        return res.status(200).json({status:'success',result:details})
      })
    }catch(error){
        console.log('err',error)
    }
})

module.exports=router