import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = 'securepassword';
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const admin = await prisma.admin.create({
    data: {
      login: 'firstadmin',
      password: hashedPassword,
    },
  });

  console.log({ admin });

  const customer = await prisma.customer.create({
    data: {
      fullname: 'KDK Sistemas LTDA',
      email: ['jkdk@example.com'],
      phone: ['1234567890'],
      registerDate: new Date(),
      contacts: {
        create: [
          {
            name: 'Klaus Kupper',
            email: ['klaus.1@example.com', 'klaus.2@example.com'],
            phone: ['0987654321'],
          },
          {
            name: 'Klaus Kupper Jr.',
            email: ['Jr.1@example.com'],
            phone: ['1122334455'],
          },
        ],
      },
    },
  });

  console.log({ customer });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
