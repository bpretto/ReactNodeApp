// import { InMemoryUserRepository } from "../../../users/repositories/implementations/inMemoryUserRepository";
// import { InMemoryTaskRepository } from "../../repositories/implementations/inMemoryTaskRepository";
// import { CreateTaskUseCase } from "./CreateTaskUseCase";

// let inMemoryTaskRepository: InMemoryTaskRepository;
// let inMemoryUserRepository: InMemoryUserRepository;
// let createTaskUseCase: CreateTaskUseCase;

// describe("Create task", () => {
//     beforeEach(() => {
//         inMemoryTaskRepository = new InMemoryTaskRepository();
//         inMemoryUserRepository = new InMemoryUserRepository();
//         createTaskUseCase = new CreateTaskUseCase(
//             inMemoryTaskRepository,
//             inMemoryUserRepository
//         );
//     });

//     it("should be able to create a new task", () => {
//         const user = inMemoryUserRepository.create({
//             name: "John Doe",
//             email: "johndoe@gmail.com",
//             password: "123456",
//         });
//     });
// });
