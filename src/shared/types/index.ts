
export type Falsely = null | undefined

export type Nullable<T> = T | Falsely

export interface LoginResponseData {
    token: string
}

export interface GenericResponse<T = Falsely> {
    isSuccess: boolean;
    data: Nullable<T>;
    errors: Nullable<string>;
}

export interface LoginPayload {
    email: string, password: string
}