import { UserInfo } from './../models/user';
import { Request, Response, Server } from "miragejs";
import Schema from "miragejs/orm/schema";
import { AppRegistry } from "../server";
import { GenericResponse } from '../../shared/types';
import { tokenValidator } from '../utils/tokenValidator';

const getUserByToken = (schema: Schema<AppRegistry>, request: Request) => {
    const userInfo = tokenValidator(request);
    const genericResponse: GenericResponse<UserInfo> = { isSuccess: true, data: null, errors: null };

    if (!userInfo) {
        const invalidTokenResp: GenericResponse<UserInfo> = { ...genericResponse, isSuccess: false, errors: 'invalid token' };
        return new Response(401, {}, invalidTokenResp)
    }

    const user = schema.db.users.findBy({ id: userInfo.id })

    return { ...genericResponse, data: { id: user.id, email: user.email, name: user.name, } }
}



const routes = (server: Server<AppRegistry>) =>
    [
        server.get("/api/me", getUserByToken)
    ]



export default routes;