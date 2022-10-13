import { faker } from "@faker-js/faker";
import { Factory } from "miragejs";

export type ProductFactory = typeof productFactory

export const productFactory = Factory.extend({
    name: () => {
        return faker.name.fullName()
    },
    email: () => {
        return faker.internet.email()
    }
});