import { v4 as uuid } from "uuid";

import { db } from "../../../../firestore/firestore";
import { User } from "../../models/User";
import { ICreateUserDTO, IUserRepository } from "../IUserRepository";

class FirestoreUserRepository implements IUserRepository {
    private static INSTANCE: FirestoreUserRepository;

    public static getInstance(): FirestoreUserRepository {
        if (!FirestoreUserRepository.INSTANCE) {
            FirestoreUserRepository.INSTANCE = new FirestoreUserRepository();
        }

        return FirestoreUserRepository.INSTANCE;
    }

    async findById(id: string): Promise<User> {
        const user = await db.collection("users").doc(id).get();
        return user.data() as User;
    }

    async findByEmail(email: string): Promise<User> {
        // const user = await db.collection("users").doc(email).get();
        // return user.data() as User;
        const userFound = await db
            .collection("users")
            .where("email", "==", email)
            .get();

        if (userFound.empty) {
            console.log("No matching documents.");
            return;
        }

        const user = userFound.docs[0].data() as User;
        // eslint-disable-next-line consistent-return
        return user;
    }

    async create({ name, email, password }: ICreateUserDTO): Promise<void> {
        const id = uuid();
        const user: User = { id, name, email, password };
        await db.collection("users").doc(id).set(user);
    }

    // login({ email, password }: ILoginDTO): Promise<User> {
    //     console.log(email, password);
    //     throw new Error("Method not implemented.");
    // }
}

export { FirestoreUserRepository };
