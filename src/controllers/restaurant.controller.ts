import { Request, Response } from "express";
import { T, } from "../libs/types/common";
import MemberService from "../models/Member.service"
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/types/enums/member.enum";

const restaurantcontroller: T = {};
restaurantcontroller.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        res.send("Home Page");
        //send| json | redirect | end | render
    } catch (err) {
        console.log("Error, goHome:", err)
    }
};

restaurantcontroller.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.send("Login Page");
    } catch (err) {
        console.log("Error, getLogin:", err)
    }
};

restaurantcontroller.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.send("SignUp Page");
    } catch (err) {
        console.log("Error, getSignup:", err)
    }
};


restaurantcontroller.processLogin = (req: Request, res: Response) => {
    try {
        console.log("processLogin");
        res.send("DONE");
    } catch (err) {
        console.log("Error, processLogin:", err)
    }
};
restaurantcontroller.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("processSignup");
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember);

        res.send(result);
    } catch (err: any) {
        console.log("Error, processSignup:", err);
        res.status(err.code || 400).json({ message: err.message || "Something went wrong" });
    }
};

export default restaurantcontroller;