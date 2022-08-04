import { IUser } from "../interfaces";
import { UserService } from "../services/UserService";

class Auth {
    private authenticated: boolean
    constructor() {
        localStorage.getItem('token')
        ? this.authenticated = true
        : this.authenticated = false;
    }

    async signup({email, password, name}: IUser) {
        const response = await UserService.createUser({email, password, name});

            await this.login({email, password});
 
        return response;
    }
    
    async login({email, password}: IUser) {
        try {
            const session = await UserService.createSession({email, password});
            localStorage.setItem("token", session.data.token);
            this.authenticated = true;
        } catch (error) {
            this.authenticated = false;
        }
    }

    logout() {
        localStorage.clear();
        this.authenticated = false;
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();