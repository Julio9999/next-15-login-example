import apiClient from "@/lib/api-client";
import { CheckSession, Login } from "./auth.interface";


const login = ({email, password}: Login) => {
    const url = 'auth/login';
    return apiClient.post(url, {email, password});
}

const logout = () => {
    const url = 'auth/logout';
    return apiClient.post(url)
}

const checkSession = () => {
    const url = 'auth/checkSession';
    return apiClient.get<CheckSession>(url);
}

export const AuthService = {
    login,
    logout,
    checkSession
}