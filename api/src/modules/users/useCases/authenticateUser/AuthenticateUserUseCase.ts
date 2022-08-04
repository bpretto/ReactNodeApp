import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new AppError("Wrong credentials", 401);
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Wrong credentials", 401);
        }

        const token = sign(
            {
                name: user.name,
                email: user.email,
            },
            auth.secret_token,
            {
                subject: user.id,
                expiresIn: auth.expires_in_token,
            }
        );

        return { token };
    }
}

export { AuthenticateUserUseCase };
