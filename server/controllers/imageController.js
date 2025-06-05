import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from "form-data";

export const generateImage = async(req, res) => {
    try {
        const {userId, prompt} = req.body;

        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(401).json({ success: false, message: 'User authentication failed or user not found.' });
        }

        if (!prompt) {
            return res.status(400).json({ success: false, message: 'Prompt is required to generate an image. Please provide a prompt.' });
        }
        
        // Fixed credit check logic
        if(!user.credit || user.credit <= 0){
            return res.json({success: false, message: 'Low on Credits', creditBalance: user.credit || 0});
        }
        
        const formData = new FormData();
        formData.append('prompt', prompt);
        
        const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
            },
            responseType: 'arraybuffer'
        });
        
        const base64Image = Buffer.from(data, 'binary').toString('base64');
        const resultImage = `data:image/png;base64,${base64Image}`;
       
        // Fixed field name consistency
        const updatedUser = await userModel.findByIdAndUpdate(
            user._id, 
            {credit: user.credit - 1}, 
            {new: true}
        );
        
        res.json({
            success: true, 
            message: 'Image Generated', 
            creditBalance: updatedUser.credit, 
            resultImage
        });
       
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}