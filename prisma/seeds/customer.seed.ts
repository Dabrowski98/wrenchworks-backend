import { PrismaClient, CustomerCreationSource } from '@prisma/client';

const prisma = new PrismaClient();

const customers = [
  // User-based customers (for each workshop)
  {
    userId: 7n, // usercustomer1
    workshopId: 1n,
    firstName: 'Krystian',
    telephoneNumber: '+48123456797',
    email: 'usercustomer1@wrenchworks.com',
    creationSource: CustomerCreationSource.USER,
    isVerified: true,
    vehicleIds: [7n], // Reference to customer's vehicle
    createdBy: 1n, // employeeId of workshop 1 owner
  },
  {
    userId: 7n, // same usercustomer1 but for different workshop
    workshopId: 2n,
    firstName: 'Krystian',
    telephoneNumber: '+48123456797',
    email: 'usercustomer1@wrenchworks.com',
    creationSource: CustomerCreationSource.USER,
    isVerified: true,
    vehicleIds: [7n], // Reference to customer's vehicle
    createdBy: 2n, // employeeId of workshop 2 owner
  },
  // Guest-based customers
  {
    guestId: 1n,
    workshopId: 1n,
    firstName: 'Adam',
    telephoneNumber: '+48111222333',
    email: 'adam.guest@example.com',
    NIP: '1234567890',
    companyName: "Adam's Company",
    creationSource: CustomerCreationSource.GUEST,
    isVerified: false,
    vehicleIds: [9n], // Reference to guest's vehicle
    createdBy: 1n, // employeeId of workshop 1 owner
  },
  {
    guestId: 2n,
    workshopId: 3n,
    firstName: 'Barbara',
    telephoneNumber: '+48222333444',
    email: 'barbara.guest@example.com',
    NIP: '2345678901',
    companyName: "Barbara's Company",
    creationSource: CustomerCreationSource.GUEST,
    isVerified: false,
    vehicleIds: [10n], // Reference to guest's vehicle
    createdBy: 3n, // employeeId of workshop 3 owner
  },
];

export async function seedCustomers() {
  try {
    let count = 0;

    for (const customer of customers) {
      const { vehicleIds, ...customerData } = customer;

      if (
        await prisma.customer.findFirst({
          where: {
            AND: [
              { workshopId: customer.workshopId },
              customer.userId
                ? { userId: customer.userId }
                : { guestId: customer.guestId },
            ],
          },
        })
      ) {
        continue;
      }

      const createdCustomer = await prisma.customer.create({
        data: {
          ...customerData,
          vehicles: {
            connect: vehicleIds.map((id) => ({ vehicleId: id })),
          },
        },
      });
      count++;
    }

    console.log('Successfully seeded customers:', count);
  } catch (error) {
    console.error('Error seeding customers:', error);
    throw error;
  }
}
