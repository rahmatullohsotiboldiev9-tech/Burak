import Errors, { HttpCode, Message } from "../libs/utils/Errors";
import { Member } from "../libs/types/member";
import jwt from "jsonwebtoken";

const AUTH_TIMER = Number(process.env.AUTH_TIMER ?? 24);

class AuthService {
    constructor() { }

    public async createToken(payload: Member) {
        return new Promise((resolve, reject) => {
            const duration = `${AUTH_TIMER}h`as const;
            jwt.sign(
                payload,
                process.env.SECRET_TOKEN as string,
                {
                    expiresIn: duration,
                },
                (err, token) => {
                    if (err)
                        reject(
                            new Errors(HttpCode.UNAUTHORIZED, Message.TOKEN_CREATION_FAILED)
                        );
                    else resolve(token as string);
                }
            );
        });
    }
}

export default AuthService;