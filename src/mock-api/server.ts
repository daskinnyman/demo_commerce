import { createServer, Model, Registry, Server } from "miragejs";
import { ProductFactory, productFactory } from "./factories/product";
import { ModelDefinition } from "miragejs/-types";
import { registerRoute } from "./routes";
import { Product } from "./models/product";
import { users } from "./fixtures/user";
import { User } from "./models/user";

type ProductModel = ModelDefinition<Product>
type UserModel = ModelDefinition<User>

export type AppRegistry = Registry<{
  product: ProductModel;
  user: UserModel
}, {
  product: ProductFactory
}>;

function makeServer() {
  createServer({
    models: {
      product: Model as ProductModel,
      user: Model as UserModel
    },
    factories: {
      product: productFactory
    },
    fixtures: {
      users: users
    },
    seeds(server: Server<AppRegistry>) {
      server.loadFixtures()
      server.createList("product", 100);
    },
    routes() {
      registerRoute(this)
    },
  });
}


export default makeServer;