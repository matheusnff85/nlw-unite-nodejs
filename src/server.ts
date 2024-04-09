import fastifyCors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastify from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

import { createEvent } from "./routes/create-event";
import { getEvent } from "./routes/get-event";
import { registerForEvent } from "./routes/register-for-event";
import { getAttendeeBadge } from "./routes/get-attendee-badge";
import { checkIn } from "./routes/check-in";

import { errorHandler } from "./error-handler";
import { getEventAttendees } from "./routes/get-event-attendees";

const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, { origin: "*" });

app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "Pass In",
      description:
        "Rotas da API para o backend da aplicação Pass In feita durante o NLW Unite da Rocketseat !!",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
});
app.register(fastifySwaggerUI, { routePrefix: "/docs" });

app.register(createEvent);
app.register(getEvent);
app.register(registerForEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);

app.setErrorHandler(errorHandler);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running on port 3333 🚀");
});
