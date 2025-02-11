import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UserRole, UserStatus } from '@prisma/client';

const prisma = new PrismaClient();

const users = [
  // Super Admin
  {
    email: 'superadmin@wrenchworks.com',
    username: 'superadmin',
    firstName: 'Super',
    lastName: 'Admin',
    telephoneNumber: '+48123456789',
    role: UserRole.SUPERADMIN,
    status: UserStatus.ACTIVE,
  },

  // Admin
  {
    email: 'admin1@wrenchworks.com',
    username: 'admin',
    firstName: 'Takise',
    lastName: 'Admin',
    telephoneNumber: '+48123456790',
    role: UserRole.ADMIN,
    status: UserStatus.ACTIVE,
  },

  // Moderators
  {
    email: 'mod1@wrenchworks.com',
    username: 'moderator',
    firstName: 'Marek',
    lastName: 'Moderator',
    telephoneNumber: '+48123456792',
    role: UserRole.MODERATOR,
    status: UserStatus.ACTIVE,
  },

  // Regular Users (Workshop Owners)
  {
    email: 'userowner1@wrenchworks.com',
    username: 'userowner1',
    firstName: 'Jan',
    lastName: 'Kowalczyk',
    telephoneNumber: '+48123456794',
    role: UserRole.USER,
    status: UserStatus.ACTIVE,
    addressId: 1n,
  },
  {
    email: 'userowner2@wrenchworks.com',
    username: 'userowner2',
    firstName: 'Piotr',
    lastName: 'Zieliński',
    telephoneNumber: '+48123456795',
    role: UserRole.USER,
    status: UserStatus.ACTIVE,
    addressId: 2n,
  },
  {
    email: 'userowner3@wrenchworks.com',
    username: 'userowner3',
    firstName: 'Tomasz',
    lastName: 'Wójcik',
    telephoneNumber: '+48123456796',
    role: UserRole.USER,
    status: UserStatus.ACTIVE,
    addressId: 3n,
  },
  // Regular Users (Customers/Employees)
  {
    email: 'usercustomer1@wrenchworks.com',
    username: 'usercustomer1',
    firstName: 'Krystian',
    lastName: 'Kowalski',
    telephoneNumber: '+48123456797',
    role: UserRole.USER,
    status: UserStatus.ACTIVE,
    addressId: 4n,
  },
  {
    email: 'usercustomer2@wrenchworks.com',
    username: 'usercustomer2',
    firstName: 'Andrzej',
    lastName: 'Zieliński',
    telephoneNumber: '+48123456798',
    role: UserRole.USER,
    status: UserStatus.ACTIVE,
    addressId: 5n,
  },
  {
    email: 'usercustomer3@wrenchworks.com',
    username: 'usercustomer3',
    firstName: 'Michał',
    lastName: 'Wójcik',
    telephoneNumber: '+48123456799',
    role: UserRole.USER,
    status: UserStatus.ACTIVE,
    addressId: 6n,
  },
  {
    email: 'useremployee1@wrenchworks.com',
    username: 'useremployee1',
    firstName: 'Adam',
    lastName: 'Kowalski',
    telephoneNumber: '+48123456797',
    role: UserRole.USER,
    status: UserStatus.ACTIVE,
    addressId: 7n,
  },
  {
    email: 'useremployee2@wrenchworks.com',
    username: 'useremployee2',
    firstName: 'Andrzej',
    lastName: 'Zieliński',
    telephoneNumber: '+48123456798',
    role: UserRole.USER,
    status: UserStatus.ACTIVE,
    addressId: 8n,
  },
  {
    email: 'useremployee3@wrenchworks.com',
    username: 'useremployee3',
    firstName: 'Michał',
    lastName: 'Wójcik',
    telephoneNumber: '+48123456799',
    role: UserRole.USER,
    status: UserStatus.ACTIVE,
    addressId: 9n,
  },
  {
    email: 'useremployee4@wrenchworks.com',
    username: 'useremployee4',
    firstName: 'Michał',
    lastName: 'Wójcik',
    telephoneNumber: '+48123456799',
    role: UserRole.USER,
    status: UserStatus.ACTIVE,
    addressId: 10n,
  },

  // Inactive/Suspended Users for testing
  {
    email: 'inactive@wrenchworks.com',
    username: 'inactive',
    firstName: 'Inactive',
    lastName: 'User',
    telephoneNumber: '+48123456797',
    role: UserRole.USER,
    status: UserStatus.INACTIVE,
    addressId: 10n,
  },
  {
    email: 'suspended@wrenchworks.com',
    username: 'suspended',
    firstName: 'Suspended',
    lastName: 'User',
    telephoneNumber: '+48123456798',
    role: UserRole.USER,
    status: UserStatus.SUSPENDED,
    addressId: 11n,
  },
];

const DEFAULT_PASSWORD = 'Password123!';

export async function seedUsers() {
  try {
    const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 10);

    const usersWithHashedPassword = users.map((user) => ({
      ...user,
      password: hashedPassword,
    }));

    const result = await prisma.user.createMany({
      data: usersWithHashedPassword,
      skipDuplicates: true,
    });

    console.log('Successfully seeded users:', result.count);
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

if (require.main === module) {
  seedUsers()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
