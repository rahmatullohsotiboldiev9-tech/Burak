// import moment from "moment";
// const currentTime = moment().format("YYYY MM DD")
// console.log(currentTime);
// const person: string = "Martin";
// const count: number = 100;
// Architectural pattern: MVC: model view controller, DI:Dependency Injection , MVP:model view presenter
// Design pattern: Middleware, Decotar

import dotenv from 'dotenv'     //Oldingi const moment = require ('moment');
dotenv.config();


import mongoose from "mongoose";

mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data) => {
        console.log("MongoDB connection succeed");
        const PORT = process.env.PORT ?? 3003;
    })
    .catch((err) => console.log("ERROR on connection MongoDB", err));