import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const guests = [
  {
    firstName: 'Adam',
    telephoneNumber: '+48111222333',
    email: 'adam.guest@example.com',
    NIP: '1234567890',
    companyName: "Adam's Company",
    vehicle: {
      connect: { vehicleId: 9n },
    },
  },
  {
    firstName: 'Barbara',
    telephoneNumber: '+48222333444',
    email: 'barbara.guest@example.com',
    NIP: '2345678901',
    companyName: "Barbara's Company",
    vehicle: {
      connect: { vehicleId: 10n },
    },
  },
];

export async function seedGuests() {
  try {
    let count = 0;

    for (const guest of guests) {
      if (
        await prisma.guest.findFirst({
          where: {
            vehicle: { vehicleId: guest.vehicle.connect.vehicleId },
          },
        })
      ) {
        continue;
      }

      const createdGuest = await prisma.guest.create({
        data: guest,
      });
      count++;
    }

    console.log('Successfully seeded guests:', count);
  } catch (error) {
    console.error('Error seeding guests:', error);
    throw error;
  }
}
