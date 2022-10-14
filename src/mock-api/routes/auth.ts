import { Request, Response, Server } from "miragejs";
import Schema from "miragejs/orm/schema";
import { AppRegistry } from "../server";
import sign from 'jwt-encode';
import { GenericResponse, LoginPayload, LoginResponseData } from "../../shared/types";

const privateKey = 'secret'


export const login = (schema: Schema<AppRegistry>, request: Request) => {
    const { requestBody } = request;

    const genericResponse: GenericResponse<LoginResponseData> = { isSuccess: true, data: null, errors: null };
    const errorResponse = { ...genericResponse, isSuccess: false, errors: "invalid user or password" };

    if (!requestBody) {
        return new Response(400, {}, errorResponse)
    }

    const loginPayload: LoginPayload = JSON.parse(requestBody);
    const user = schema.db.users.findBy({ email: loginPayload.email });

    if (!user) {
        return new Response(400, {}, errorResponse)
    }

    const token = sign({ id: user.id, email: user.email, name: user.name }, privateKey)

    return { ...genericResponse, data: { token } }
}

const routes = (server: Server<AppRegistry>) =>
    [
        server.post("/api/login", login),

    ]



export default routes;