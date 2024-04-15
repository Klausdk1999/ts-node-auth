import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = 'securepassword';
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const admin = await prisma.admin.create({
    data: {
      login: 'admin',
      password: hashedPassword,
    },
  });

  console.log({ admin });

  const customer = await prisma.customer.create({
    data: {
      fullname: 'KDK Sistemas LTDA',
      emails: ['jkdk@example.com'],
      phones: ['1234567890'],
      registerDate: new Date(),
      contacts: {
        create: [
          {
            fullname: 'Klaus Kupper',
            emails: ['klaus.1@example.com', 'klaus.2@example.com'],
            phones: ['0987654321'],
          },
          {
            fullname: 'Klaus Kupper Jr.',
            emails: ['Jr.1@example.com'],
            phones: ['1122334455'],
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
