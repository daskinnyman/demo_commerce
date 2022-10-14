import { Product } from './../models/product';
import { GenericResponse } from './../../shared/types/index';
import { Request, Server } from "miragejs";
import Schema from "miragejs/orm/schema";
import { AppRegistry } from "../server";


const getAllProduct = (schema: Schema<AppRegistry>) => {
    const response: GenericResponse<Product[]> = { isSuccess: true, errors: null, data: null }
    return { ...response, data: schema.all("product").models }
}


const getProductById = (schema: Schema<AppRegistry>, request: Request) => {
    return schema.db.products.find(request.params.id)
}

const routes = (server: Server<AppRegistry>) =>
    [
        server.get("/api/products", getAllProduct),
        server.get("/api/products/:id", getProductById)
    ]



export default routes;