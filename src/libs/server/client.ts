import { PrismaClient } from "@prisma/client";

declare global {
  var client: PrismaClient | undefined;
}

const apiClient = global.client || new PrismaClient();

if (process.env.NODE_ENV === "development") global.client = apiClient;

export default apiClient;
