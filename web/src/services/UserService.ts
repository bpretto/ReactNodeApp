import { IUser } from '../interfaces';
import { Api } from '../providers/api';

const createUser = async (user: IUser) => {
    return await Api.post('/users/create', user);
}

const createSession = async (user: IUser) => {
    return await Api.post('/sessions', user);
}

export const UserService = {
    createUser,
    createSession,
}