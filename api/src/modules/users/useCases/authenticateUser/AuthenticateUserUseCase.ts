import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        console.log("chego boyu");
        const user = await this.userRepository.findByEmail({ email });

        if (!user) {
            console.log("tem esse user nao boy");
            throw new Error("Wrong credentials"); // tratar erro
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Wrong credentials"); // tratar erro
        }

        const token = sign(
            {
                name: user.name,
            },
            "e5e9fa1ba31ecd1ae84f75caaa474f3a663f05f4",
            {
                subject: user.id,
                expiresIn: "1d",
            }
        );

        return {
            user,
            token,
        };
    }
}

export { AuthenticateUserUseCase };
