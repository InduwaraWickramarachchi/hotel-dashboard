import 'dotenv/config';
import { connectToDB } from '@/lib/mongdb';
import { AdminUser } from '@/models/adminUser';
import { hash } from 'bcryptjs';

console.log('MONGODB_URI:', process.env.MONGODB_URI);

async function seed() {
  await connectToDB();

  const existing = await AdminUser.findOne({ email: 'admin@gmail.com' });
  if (existing) {
    console.log('Admin already exists!');
    return;
  }

  const hashedPassword = await hash('admin123', 10);

  await AdminUser.create({
    email: 'admin@gmail.com',
    password: hashedPassword,
    name: 'Admin',
  });

  console.log('Admin created!');
}

seed().finally(() => process.exit());
