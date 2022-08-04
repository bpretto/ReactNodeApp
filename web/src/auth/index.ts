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

// import { useState } from "react";
// import { User } from "../interfaces";
// import { createSession } from "../services/UserService";

// function Auth() {
//     const [authenticated, setAuthenticated] = useState(false);
    
//     async function login({email, password}: User) {
//         try {
//             const session = await createSession({email, password});
//             localStorage.setItem("token", session.data.token);
//             setAuthenticated(true);
//         } catch (error) {
//             setAuthenticated(false);
//             console.log(error);
//         }
//     }

//     function logout() {
//         localStorage.clear();
//         setAuthenticated(false);
//     }

//     function isAuthenticated() {
//         return authenticated;
//     }
// }

// export default Auth;