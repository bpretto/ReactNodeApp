import { hash } from "bcrypt";
import "reflect-metadata";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
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

        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new AppError("User already exists"); // tratar erro
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
