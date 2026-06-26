const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient({});

async function main() {
  console.log('Seeding default AdminUser...');

  const defaultEmail = process.env.ADMIN_EMAIL || 'admin@kazzona.com';
  const defaultPassword = process.env.ADMIN_PASSWORD || 'password123';

  // Check if admin already exists
  const existingAdmin = await prisma.adminUser.findUnique({
    where: { email: defaultEmail },
  });

  if (existingAdmin) {
    console.log(`Admin with email ${defaultEmail} already exists. Skipping.`);
    return;
  }

  // Hash password
  const passwordHash = await bcrypt.hash(defaultPassword, 10);

  // Create admin user
  await prisma.adminUser.create({
    data: {
      email: defaultEmail,
      passwordHash: passwordHash,
    },
  });

  console.log(`Created default admin: ${defaultEmail}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
