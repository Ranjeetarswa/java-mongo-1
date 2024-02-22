import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {

    try{
      const connactionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`/n MongoDB connected !! DB HOST: ${connactionInstance.connection.host}`);
    }catch(error){
         console.log("MONGODB connaction FAILED", error);
         process.exit(1)
    }
}

export default connectDB


