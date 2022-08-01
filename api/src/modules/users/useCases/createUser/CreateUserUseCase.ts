import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { User } from "../../models/User";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    email: string;
    name: string;
    password: string;
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({ email, name, password }: IRequest): Promise<void> {
        const passwordHash = await hash(password, 8);
        console.log("oi");

        const userAlreadyExists = await this.userRepository.findByEmail(email);
        console.log("tests");

        if (userAlreadyExists) {
            throw new Error("User already exists"); // tratar erro
        } else {
            this.userRepository.create({
                email,
                name,
                password: passwordHash,
            });
        }
    }
}

export { CreateUserUseCase };
