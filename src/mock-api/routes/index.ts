import { Server } from "miragejs";
import { AppRegisty } from "../server";
import productRoutes from "./products";
import authRoutes from "./auth";

export const registerRoute = (server: Server<AppRegisty>) => [...productRoutes(server), ...authRoutes(server)]
