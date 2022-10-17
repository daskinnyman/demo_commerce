import { faker } from "@faker-js/faker";
import { Factory } from "miragejs";

export type ProductFactory = typeof productFactory

export const productFactory = Factory.extend({
    name: () => {
        return faker.commerce.productName()
    },
    color: () => {
        return faker.color.human()
    },
    colorCode: () => {
        return faker.color.rgb()
    },
    price: () => {
        return faker.commerce.price(10, 9999)
    },
    description: () => {
        return faker.commerce.productDescription()
    },
    material: () => {
        return faker.commerce.productMaterial()
    },
    image: () => {
        return faker.image.food(640, 480, true)
    }
});