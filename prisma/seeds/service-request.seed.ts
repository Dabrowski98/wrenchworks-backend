import { PrismaClient, ServiceRequestStatus } from '@prisma/client';

const prisma = new PrismaClient();

const serviceRequests = [
  // User service requests
  {
    workshopId: 1n,
    vehicleId: 1n,
    userId: 7n,
    description: 'Regular maintenance check',
    status: ServiceRequestStatus.PENDING,
    jobs: {
      connect: [{ jobId: 1n }, { jobId: 2n }],
    },
  },
  {
    workshopId: 2n,
    vehicleId: 2n,
    userId: 8n,
    description: 'Engine making strange noises',
    status: ServiceRequestStatus.PENDING,
    jobs: {
      connect: [{ jobId: 3n }, { jobId: 4n }],
    },
  },
  // Guest service requests
  {
    workshopId: 1n,
    vehicleId: 5n,
    guestId: 1n,
    description: 'Brake inspection needed',
    status: ServiceRequestStatus.PENDING,
    jobs: {
      connect: [{ jobId: 2n }],
    },
  },
  {
    workshopId: 2n,
    vehicleId: 6n,
    guestId: 2n,
    description: 'Oil change and filter replacement',
    status: ServiceRequestStatus.PENDING,
    jobs: {
      connect: [{ jobId: 1n }],
    },
  },
];

export async function seedServiceRequests() {
  try {
    let count = 0;

    for (const request of serviceRequests) {
      const existingRequest = await prisma.serviceRequest.findFirst({
        where: {
          AND: [
            { workshopId: request.workshopId },
            { vehicleId: request.vehicleId },
            request.userId ? { userId: request.userId } : {},
            request.guestId ? { guestId: request.guestId } : {},
          ],
        },
      });

      if (existingRequest) continue;

      await prisma.serviceRequest.create({
        data: {
          workshop: { connect: { workshopId: request.workshopId } },
          vehicle: { connect: { vehicleId: request.vehicleId } },
          ...(request.userId && {
            user: { connect: { userId: request.userId } },
          }),
          ...(request.guestId && {
            guest: { connect: { guestId: request.guestId } },
          }),
          description: request.description,
          status: request.status,
          jobs: request.jobs,
        },
      });
      count++;
    }

    console.log('Successfully seeded service requests:', count);
  } catch (error) {
    console.error('Error seeding service requests:', error);
    throw error;
  }
}
