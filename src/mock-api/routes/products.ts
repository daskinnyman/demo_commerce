import { Request, Server } from "miragejs";
import Schema from "miragejs/orm/schema";
import { AppRegisty } from "../server";


const getAllProduct = (schema: Schema<AppRegisty>) => {
    return schema.all("product")
}


const getProductById = (schema: Schema<AppRegisty>, request: Request) => {
    return schema.db.products.find(request.params.id)
}

const routes = (server: Server<AppRegisty>) =>
    [
        server.get("/api/reminders", getAllProduct),
        server.get("/api/reminders/:id", getProductById)
    ]



export default routes;