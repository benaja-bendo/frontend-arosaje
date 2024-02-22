import HttpService from '@/services/HttpService.ts';
import {Tuser} from "@/types/Tuser.ts";
import config from "@/utils/config-app.ts";
import {ResponseLoginAction} from "@/types/ResponseLoginAction.ts";
import {ResponseApi} from "@/types/ResponseApi.ts";

interface AuthServiceProps {
    isAuthenticated: boolean;
    user: object | Tuser;
    signin(email: string, password: string): Promise<void>;
    signout(): Promise<void>;
    register(email: string, password: string, name: string): Promise<void>;
}

class AuthService implements AuthServiceProps {
    get isAuthenticated() {
        return localStorage.getItem('token') !== null && localStorage.getItem('user') !== null;
    }
    get user() {
        const user = localStorage.getItem('user');
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }

    async signin(email: string, password: string) {
        try {
            const response = await HttpService.post<ResponseApi<ResponseLoginAction>>(config.api.routes.login, { email, password });
            if (response.status === 200) {
                const { token, user } = response.data.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                console.error('Authentication failed');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async signout() {
        try {
            const response = await HttpService.post<ResponseApi<ResponseLoginAction>>(config.api.routes.logout);
            if (response.status === 200) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                localStorage.removeItem('tenant_id');
            } else {
                console.error('Sign out failed');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    async   register(email: string, password: string, name: string) {
        try {
            const response = await HttpService.post<ResponseApi<ResponseLoginAction>>(config.api.routes.register, { email, password, name });
            if (response.status === 200) {
                const { token, user } = response.data.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                console.error('Authentication failed');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new AuthService();