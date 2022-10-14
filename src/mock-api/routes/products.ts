import { Request, Server } from "miragejs";
import Schema from "miragejs/orm/schema";
import { AppRegistry } from "../server";


const getAllProduct = (schema: Schema<AppRegistry>) => {
    return schema.all("product")
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