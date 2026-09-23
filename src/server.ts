// import moment from "moment";
// const currentTime = moment().format("YYYY MM DD")
// console.log(currentTime);
// const person: string = "Martin";
// const count: number = 100;
// Architectural pattern: MVC: model view controller, DI:Dependency Injection , MVP:model view presenter
// Design pattern: Middleware, Decotar

import dotenv from 'dotenv'     //Oldingi const moment = require ('moment');
dotenv.config();

console.log("PORT:", process.env.PORT);

console.log("MONGO_URL:", process.env.MONGO_URL);