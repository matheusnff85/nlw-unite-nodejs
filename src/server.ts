import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const app = fastify();

const prisma = new PrismaClient({
  log: ["query"],
});

app.post("/events", async (request, reply) => {
  const createEventSchema = z.object({
    title: z.string(),
    details: z.string(),
    maximumAttendees: z.number(),
  });

  const { title, details, maximumAttendees } = createEventSchema.parse(
    request.body
  );

  const event = await prisma.event.create({
    data: {
      title,
      details,
      maximumAttendees,
      slug: Date.now().toString(),
    },
  });

  return reply.status(201).send({ eventId: event.id });
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running on port 3333 🚀");
});
