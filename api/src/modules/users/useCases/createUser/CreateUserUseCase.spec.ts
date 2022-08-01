import { AppError } from "../../../../errors/AppError";
import { InMemoryUserRepository } from "../../repositories/implementations/inMemoryUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

let inMemoryUserRepository: InMemoryUserRepository;
let createUserUseCase: CreateUserUseCase;

describe("Create user", () => {
    beforeEach(() => {
        inMemoryUserRepository = new InMemoryUserRepository();
        createUserUseCase = new CreateUserUseCase(inMemoryUserRepository);
    });

    it("should be able to create a new user", async () => {
        const user = {
            name: "John Doe",
            email: "johndoe@gmail.com",
            password: "123456",
        };

        await createUserUseCase.execute(user);

        const userInMemory = await inMemoryUserRepository.findByEmail(
            user.email
        );

        expect(user).toBeDefined();
        expect(user.name).toBe(userInMemory.name);
        expect(userInMemory).toHaveProperty("id");
    });

    it("should not be able to create 2 users with same email", async () => {
        const user1 = {
            name: "John Doe",
            email: "johndoe@gmail.com",
            password: "123456",
        };

        const user2 = {
            name: "Not John Doe",
            email: "johndoe@gmail.com",
            password: "123456",
        };

        await createUserUseCase.execute(user1);
        expect(createUserUseCase.execute(user2)).rejects.toBeInstanceOf(
            AppError
        );

        const userInMemory = await inMemoryUserRepository.findByEmail(
            user1.email
        );

        expect(userInMemory.name).toBe(user1.name);
    });
});
