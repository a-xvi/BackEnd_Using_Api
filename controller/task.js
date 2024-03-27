const userModel = require("../model/task.js");

const create_user = async(req, res)=>{
    try {
        const userData = req.body;
        const newUser = new userModel(userData);
        await newUser.save();

        return res.status(201).json({"message":"completed"});
    }catch(e) {
        return res.status(404).json({error:e.message});
    }
}

const getUsers = async (req,res) =>{

    try{
        const allUsers = await userModel.find(); 
        return res.status(200).json({
            status: 'Success',
            data:{
                user:allUsers
            }});
    }catch(e){
        return res.status(500).json({error:e})
    }

}

const getUsers_id = async (req,res) =>{
    try{
        const User = await userModel.findOne({'_id':req.params.id});
        return res.status(200).json({
            status: 'found',
            data:{
                user:User
            }});
    }catch(e){
        return res.status(500).json({error:e});
    }
}

const deleteUser =  async(req,res)=>{
    try{
        await userModel.findOneAndDelete({'_id':req.params.id}); // doesnt need to be in a variable
        return res.status(200).json({"message":"completed"});
    }catch(e){
        return res.status(500).json({error:e});
    }
}

const updateUser = async(req,res)=>{
    try{
        const updateUser = await userModel.findOneAndUpdate({'_id':req.params.id},req.body,{new:true});
        return res.status(200).json({
            status: 'completed',
            data:{
                user:updateUser
            }});
    }catch(e){
        return res.status(500).json({error:e.message});
    }
}

module.exports={
    create_user,
    getUsers,
    getUsers_id,
    deleteUser,
    updateUser
}