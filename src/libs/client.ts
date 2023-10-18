import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

client.user.create({ data: { id: 1, name: "Jungsoo" } });
