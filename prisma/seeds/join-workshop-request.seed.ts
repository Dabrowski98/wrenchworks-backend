import { PrismaClient, JoinWorkshopRequestStatus } from '@prisma/client';

const prisma = new PrismaClient();

const joinWorkshopRequests = [
  // Workshop 1 sending request to potential employees
  {
    receiverId: 8n, // user that will receive request to join workshop 1
    workshopId: 1n,
    employeeId: 1n, // existing employee (owner) sending the request
    message: 'Would you like to join our workshop team as a mechanic?',
    status: JoinWorkshopRequestStatus.PENDING,
    createdBy: 1n, // employeeId who created the request
  },
  {
    receiverId: 9n, // user that will receive request to join workshop 1
    workshopId: 1n,
    employeeId: 1n,
    message:
      'We need an experienced service advisor. Interested in joining us?',
    status: JoinWorkshopRequestStatus.PENDING,
    createdBy: 1n,
  },
  // Workshop 2 sending request to potential employees
  {
    receiverId: 10n, // user that will receive request to join workshop 2
    workshopId: 2n,
    employeeId: 2n, // existing employee (owner) sending the request
    message:
      'Looking for diagnostic specialists. Would you like to join our team?',
    status: JoinWorkshopRequestStatus.PENDING,
    createdBy: 2n,
  },
  // Workshop 3 sending request to potential employees
  {
    receiverId: 11n, // user that will receive request to join workshop 3
    workshopId: 3n,
    employeeId: 3n, // existing employee (owner) sending the request
    message: 'Join our luxury vehicle service team as a senior technician',
    status: JoinWorkshopRequestStatus.PENDING,
    createdBy: 3n,
  },
];

export async function seedJoinWorkshopRequests() {
  try {
    let count = 0;

    for (const request of joinWorkshopRequests) {
      const existingRequest = await prisma.joinWorkshopRequest.findFirst({
        where: {
          AND: [
            { workshopId: request.workshopId },
            { receiverId: request.receiverId },
            { employeeId: request.employeeId },
          ],
        },
      });

      if (existingRequest) continue;

      await prisma.joinWorkshopRequest.create({
        data: {
          workshop: { connect: { workshopId: request.workshopId } },
          user: { connect: { userId: request.receiverId } },
          employee: { connect: { employeeId: request.employeeId } },
          message: request.message,
          status: request.status,
          createdBy: request.createdBy,
        },
      });
      count++;
    }

    console.log('Successfully seeded join workshop requests:', count);
  } catch (error) {
    console.error('Error seeding join workshop requests:', error);
    throw error;
  }
}
