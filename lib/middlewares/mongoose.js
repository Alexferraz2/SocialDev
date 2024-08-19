import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

const databaseMiddleware = async (req, res, next) => {
    try{
        if(!global.mongoose){
            global.mongoose = await mongoose.connect(MONGODB_URI)
            
        }
    } catch(error){
        res.status(500).send('databse error')
    }

    return next();
}

export default databaseMiddleware;