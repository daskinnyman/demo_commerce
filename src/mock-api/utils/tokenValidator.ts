import jwtDecode from "jwt-decode";
import { Nullable } from "../../shared/types";
import { UserInfo } from "../models/user";
import { Request } from "miragejs";

export const tokenValidator = (request: Request): Nullable<UserInfo> => {
    const { requestHeaders } = request;

    const { Authorization } = requestHeaders;


    if (!Authorization) {
        return null;
    }

    const userJWTDecoded: UserInfo = jwtDecode(Authorization);

    if (!userJWTDecoded) {
        return null;
    }

    return userJWTDecoded;
}
