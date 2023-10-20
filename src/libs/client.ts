import { PrismaClient } from "@prisma/client";

export const apiClient = new PrismaClient();

async function main() {
  await apiClient.user.create({
    data: {
      id: 10,
      name: "1000점",
    },
  });
}

main().then(async () => {
  await apiClient.$disconnect();
});
