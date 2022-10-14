import { Server } from "miragejs";
import { AppRegistry } from "../server";
import productRoutes from "./products";
import authRoutes from "./auth";
import userRoutes from "./user";

export const registerRoute = (server: Server<AppRegistry>) => [...productRoutes(server), ...authRoutes(server), ...userRoutes(server)]
