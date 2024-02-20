import {Role} from "@/types/Role.ts";

export type Tuser = {
    id: string;
    profile_photo_path: string;
    created_at: string;
    updated_at: string;
    email: string;
    email_verified_at: string;
    name: string;
    role?: Role
}