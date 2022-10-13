import { Request, Server } from "miragejs";
import Schema from "miragejs/orm/schema";
import { AppRegisty } from "../server";
import sign from 'jwt-encode';

const privateKey = 'secret'

interface LoginPayload {
    email: string, password: string
}

export const login = (schema: Schema<AppRegisty>, request: Request) => {
    const { requestBody } = request;

    if (!requestBody) {
        return schema.none;
    }
    const loginPayload: LoginPayload = JSON.parse(requestBody);
    console.log(loginPayload)
    const user = schema.db.users.findBy({ email: loginPayload.email });
    console.log(user)
    if (!user) {
        return schema.none;
    }

    const token = sign(user, privateKey)
    console.log(token)
    return {
        token
    }
}

const routes = (server: Server<AppRegisty>) =>
    [
        server.post("/api/login", login),

    ]



export default routes;