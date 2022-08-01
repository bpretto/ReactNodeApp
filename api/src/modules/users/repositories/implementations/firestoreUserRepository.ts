import { v4 as uuid } from "uuid";

import { db } from "../../../../firestore/firestore";
import { User } from "../../models/User";
import { ICreateUserDTO, ILoginDTO, IUserRepository } from "../IUserRepository";

class FirestoreUserRepository implements IUserRepository {
    private static INSTANCE: FirestoreUserRepository;

    public static getInstance(): FirestoreUserRepository {
        if (!FirestoreUserRepository.INSTANCE) {
            FirestoreUserRepository.INSTANCE = new FirestoreUserRepository();
        }

        return FirestoreUserRepository.INSTANCE;
    }

    async findByEmail(email: string): Promise<User> {
        const search = await db
            .collection("users")
            .where("email", "==", email)
            .get();
        console.log(search.docs[0].data() as User);
        const user = search.docs[0].data() as User;

        return user;
    }

    async create({ name, email, password }: ICreateUserDTO): Promise<void> {
        const user: User = { id: uuid(), name, email, password };

        await db.collection("users").doc(email).set(user);
    }

    login({ email, password }: ILoginDTO): Promise<User> {}
}

export { FirestoreUserRepository };
