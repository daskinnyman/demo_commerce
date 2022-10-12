// src/server.js
import { createServer } from "miragejs";
import { faker } from '@faker-js/faker'

function makeServer() {
  createServer({
    routes() {
      this.get("/api/reminders", () => ({
        reminders: [{
          name:faker.name.fullName(),
          email:faker.internet.email()
        }],
      }));
    },
  });
}


export default makeServer;