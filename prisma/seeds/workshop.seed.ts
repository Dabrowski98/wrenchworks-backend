import { PrismaClient, WorkshopDetailsStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const DEFAULT_PASSWORD = 'Password123!';

const workshops = [
  {
    ownerId: 4n, // userowner1
    addressId: 1n,
    email: 'warsztat1@wrenchworks.com',
    telephoneNumber: '+48987654321',
    isVerified: true,
    isManagingWork: true,
    isOfferingService: true,
    details: {
      workshopName: 'Auto Serwis Kowalczyk',
      description: 'Profesjonalny warsztat samochodowy w centrum Warszawy',
      rating: 0.0,
      status: WorkshopDetailsStatus.ACTIVE,
      NIP: '1234567890',
      logoURL: null,
    },
    jobCategoryIds: [1n, 2n, 3n, 4n],
  },
  {
    ownerId: 5n, // userowner2
    addressId: 2n,
    email: 'warsztat2@wrenchworks.com',
    telephoneNumber: '+48987654322',
    isVerified: true,
    isManagingWork: true,
    isOfferingService: true,
    details: {
      workshopName: 'Serwis Zieliński',
      description: 'Kompleksowa obsługa samochodów osobowych i dostawczych',
      rating: 0.0,
      status: WorkshopDetailsStatus.ACTIVE,
      NIP: '2234567890',
      logoURL: null,
    },
    jobCategoryIds: [1n, 2n, 5n, 6n],
  },
  {
    ownerId: 6n, // userowner3
    addressId: 3n,
    email: 'warsztat3@wrenchworks.com',
    telephoneNumber: '+48987654323',
    isVerified: true,
    isManagingWork: true,
    isOfferingService: true,
    details: {
      workshopName: 'Auto Naprawa Wójcik',
      description: 'Specjalizacja w naprawach powypadkowych',
      rating: 0.0,
      status: WorkshopDetailsStatus.ACTIVE,
      NIP: '3234567890',
      logoURL: null,
    },
    jobCategoryIds: [7n, 8n, 9n, 10n],
  },
];

export async function seedWorkshops() {
  try {
    let count = 0;
    const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 10);

    for (const workshop of workshops) {
      const { details, jobCategoryIds, ...workshopData } = workshop;

      if (
        await prisma.workshop.findUnique({ where: { email: workshop.email } })
      ) {
        continue;
      }

      const createdWorkshop = await prisma.workshop.create({
        data: {
          ...workshopData,
          workshopDetails: {
            create: details,
          },
          jobCategories: {
            connect: jobCategoryIds.map((id) => ({ categoryId: id })),
          },
        },
      });

      count++;
    }

    console.log('Successfully seeded workshops with details:', count);
  } catch (error) {
    console.error('Error seeding workshops:', error);
    throw error;
  }
}
