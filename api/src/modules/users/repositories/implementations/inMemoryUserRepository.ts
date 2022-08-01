import { v4 as uuid } from "uuid";

import { User } from "../../models/User";
import { ICreateUserDTO, IUserRepository } from "../IUserRepository";

class InMemoryUserRepository implements IUserRepository {
    private userArray: User[];

    private static INSTANCE: InMemoryUserRepository;

    constructor() {
        this.userArray = [];
    }

    public static getInstance(): InMemoryUserRepository {
        if (!InMemoryUserRepository.INSTANCE) {
            InMemoryUserRepository.INSTANCE = new InMemoryUserRepository();
        }

        return InMemoryUserRepository.INSTANCE;
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.userArray.find((user) => user.email === email);
        return user;
    }
    async findById(id: string): Promise<User> {
        const user = this.userArray.find((user) => user.id === id);
        return user;
    }
    async create({ name, email, password }: ICreateUserDTO): Promise<void> {
        const user = new User();
        Object.assign(user, {
            name,
            email,
            password,
            id: uuid(),
        });

        this.userArray.push(user);
    }
}

export { InMemoryUserRepository };
