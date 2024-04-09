import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

import { createEvent } from "./routes/create-event";
import { getEvent } from "./routes/get-event";

const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent);
app.register(getEvent);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running on port 3333 🚀");
});