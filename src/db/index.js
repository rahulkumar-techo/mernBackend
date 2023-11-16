
import mongoose from "mongoose"; 
import {DB_NAME} from "../constants.js";
import "colors"

const  username = process.env.MONGO_USERNAME;
const userpassword = process.env.MONGO_PASSWORD;

const connectDB = async ()=>{

    try {
      const afterConnection=  await mongoose.connect(`mongodb+srv://${username}:${userpassword}@cluster0.woa3kkx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
      console.log(`\n mongodb connected !! DB HOST ${afterConnection.connection.host}`.bgGreen.bold);
        
    } catch (error) {
        console.log("MONGOOSE CONNECTION FAILED".bgRed.bold,error);
        process.exit(1);
    }
}

export default connectDB;