import User1 from '../Model/userSchema.js';

export const adduser = async (req, res) => {

    const {name, email , phone, city} = req.body;

    const newUser = new User1({name, email, phone, city});

    try{
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch(err) {
        res.status(409).json({message: err.message})
    }
};

export const getAllusers = async (req, res) => {
   try{
       const users = await User1.find({});
        res.status(200).json(users);
   }
   catch(err){
       res.status(400).json({message:err.message});
   }
};

export const getOneUser = async (req, res) => {
    try{
        
        const users = await User1.findById(req.params.id);
         res.status(200).json(users);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
 };
 
 export const editUser = async (req, res) => {

    let user = req.body;
    const edituser = new User1(user);

    try{
         await User1.updateOne({_id:req.params.id},edituser);
         res.status(200).json(edituser);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
 };
 
 export const deleteUser = async (req, res) => {
    try{
        await User1.deleteOne({_id:req.params.id});
        res.status(200).json({message: 'user deleted successfully'})
    }
    catch(err){
        res.status(409).json({message:err.message})
    }
 };
