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
    const response: GenericResponse<Product[]> = { isSuccess: true, errors: null, data: null }
    return { ...response, data: schema.db.products.findBy({ id: request.params.id }) }
}

const getProductColors = (schema: Schema<AppRegistry>, request: Request) => {
    const products = schema.all("product").models;

    const colors = products.reduce((prev: string[], curr: Product) => {
        if (!prev.includes(curr.colorCode)) {
            prev.push(curr.colorCode)
        }

        return prev;
    }, [])

    const response: GenericResponse<string[]> = { isSuccess: true, errors: null, data: null }
    return { ...response, data: colors }
}

const routes = (server: Server<AppRegistry>) =>
    [
        server.get("/api/products", getAllProduct),
        server.get("/api/products/colors", getProductColors),
        server.get("/api/products/:id", getProductById),
    ]



export default routes;