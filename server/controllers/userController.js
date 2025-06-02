import userModel from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const registerUser = async (req, res)=>{
    try {
        const {name, email, password} = req.body;

        if(!name || !email ||!password){
            return res.json({success: false, message: 'missing details'})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt)

        const userData = {
            name, 
            email, 
            password: hashedPass
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()   

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

        res.json({success: true, token, user:{name: user.name}})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

const loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success: false, message: 'Wrong credentials'})
        }

        const isMatched = await bcrypt.compare(password, user.password)

        if(!isMatched){
            return res.json({success: false, message: 'Wrong credentials'})
        }else{
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

            res.json({success: true, token, user:{name: user.name}})

        }

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

    const userCredits = async(req, res)=>{
        try {
            const {userId} = req.body
            const user = await userModel.findById(userId)
            res.json({
            success: true, 
            credit: user.credit, // Default to 0 if credits field doesn't exist
            name: user.name
        });

        } catch (error) {
            console.log(error);
            res.json({success: false, message: error.message})
        }
    }

export {loginUser, registerUser, userCredits}