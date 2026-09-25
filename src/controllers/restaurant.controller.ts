import { Request, Response } from "express";
import { T, } from "../libs/types/common";
import MemberService from "../models/member.service"

const restaurantcontroller: T = {};
restaurantcontroller.goHome = (req: Request, res: Response) => {
    try {
        res.send("Home Page");
    } catch (err) {
        console.log("Error, goHome:", err)
    }
};

restaurantcontroller.getLogin = (req: Request, res: Response) => {
    try {
        res.send("Login Page");
    } catch (err) {
        console.log("Error, getLogin:", err)
    }
};

restaurantcontroller.getSignUp = (req: Request, res: Response) => {
    try {
        res.send("signUp Page");
    } catch (err) {
        console.log("Error, getSignUp:", err)
    }
};

export default restaurantcontroller;