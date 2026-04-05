import { api } from "./client";

export type User = {
    name: string;
    id: string;
    email: string;
    image?: string;
}


export async function getCurrentUser() {
    
    return api<User>("/auth/me")
}