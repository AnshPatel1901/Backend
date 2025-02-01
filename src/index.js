import dotenv from "dotenv";
dotenv.config(); 

import connectDB from "./db/index.js";


connectDB()
    .then(()=>{
        const serv = process.env.PORT || 8000;
        app.listen(serv, ()=>{
            console.log(`server is running on port ${serv}`);
        })
    })
    .catch((err)=>{
        console.log("mongoDB connection fail",err);
    })








// import express from "express";
// const app = express();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("ERR:",error);
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log("Listening on port",process.env.PORT);
//         })

//     } catch (error) {
//         console.log(err);
//         throw err
//     }

// }) 