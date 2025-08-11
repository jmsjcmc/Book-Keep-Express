export interface UserResponse {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    role: number;
}

export interface UserRequest {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    role: number;
}