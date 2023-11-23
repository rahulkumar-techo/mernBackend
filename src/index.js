import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";
import "colors";

dotenv.config({
    path:"./env"
});

const port = process.env.PORT || 8080;

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running at port ${port}`);
    })
})
.catch((error)=>{
    console.log(`mongo db Connection failed ${error}`.bgRed.bold);
})
