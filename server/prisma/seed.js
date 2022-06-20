const { PrismaClient } = require("@prisma/client");
const { ADMIN_EMAIL, ADMIN_PASSWORD } = require("../src/config");
const { hashedPassword } = require("../src/helpers");
const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.create({
    data: {
      name: "Super Admin",
      email: ADMIN_EMAIL,
      password: hashedPassword(ADMIN_PASSWORD),
      phoneNumber: "09789506439",
      userTypes: "super_admin",
    },
  });
};

main()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
