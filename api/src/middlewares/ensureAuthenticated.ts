import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import auth from "../config/auth";
import { AppError } from "../errors/AppError";
import { FirestoreUserRepository } from "../modules/users/repositories/implementations/firestoreUserRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError("JWT token is missing", 401);
    }

    const [, token] = req.headers.authorization.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            auth.expires_in_token
        ) as IPayload;

        const userRepository = new FirestoreUserRepository();
        const user = userRepository.findById(user_id);

        if (!user) {
            throw new AppError("User not found", 401);
        }

        next();
    } catch {
        throw new AppError("Invalid JWT token", 401);
    }
}
