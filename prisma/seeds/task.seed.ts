import { PrismaClient, TaskStatus } from '@prisma/client';

const prisma = new PrismaClient();

const tasks = [
  // Tasks for completed services
  {
    serviceId: 1n, // Completed service for user 7 in workshop 1
    workshopJobId: 1n, // Oil change job
    employeeId: 1n,
    description: 'Oil change',
    executionTime: 2,
    partsCost: 48999,
    status: TaskStatus.COMPLETED,
    createdBy: 1n,
  },
  {
    serviceId: 1n,
    workshopJobId: 2n, // Brake inspection job
    employeeId: 1n,
    description: 'Brake inspection',
    status: TaskStatus.COMPLETED,
    executionTime: 0.5,
    partsCost: 0,
    createdBy: 1n,
  },
  {
    serviceId: 2n, // Completed service for user 7 in workshop 2
    workshopJobId: 3n, // Engine diagnostic job
    employeeId: 2n,
    description: 'Engine diagnostic',
    status: TaskStatus.COMPLETED,
    executionTime: 2,
    partsCost: 0,
    createdBy: 2n,
  },
  {
    serviceId: 2n,
    workshopJobId: 4n, // Performance tuning job
    employeeId: 2n,
    description: 'Performance tuning',
    status: TaskStatus.COMPLETED,
    executionTime: 2,
    partsCost: 0,
    createdBy: 2n,
  },
  // Tasks for services in progress
  {
    serviceId: 3n, // Service in progress for user 8 in workshop 2
    workshopJobId: 3n, // Engine diagnostic job
    employeeId: 2n,
    description: 'Engine diagnostic',
    status: TaskStatus.PENDING,
    executionTime: 2,
    partsCost: 0,
    createdBy: 2n,
  },
  {
    serviceId: 3n,
    workshopJobId: 4n, // Performance tuning job
    employeeId: 2n,
    description: 'Performance tuning',
    status: TaskStatus.PENDING,
    executionTime: 2,
    partsCost: 0,
    createdBy: 2n,
  },
  // Additional tasks for variety
  {
    serviceId: 4n, // Another completed service
    workshopJobId: 5n,
    employeeId: 3n,
    description: 'Luxury vehicle detailing',
    status: TaskStatus.COMPLETED,
    executionTime: 2,
    partsCost: 15000,
    createdBy: 3n,
  },
  {
    serviceId: 4n,
    workshopJobId: 6n,
    employeeId: 3n,
    description: 'Ceramic coating application',
    status: TaskStatus.COMPLETED,
    executionTime: 2,
    partsCost: 15000,
    createdBy: 3n,
  },
];

export async function seedTasks() {
  try {
    let count = 0;

    for (const task of tasks) {
      const existingTask = await prisma.task.findFirst({
        where: {
          serviceId: task.serviceId,
          workshopJobId: task.workshopJobId,
        },
      });

      if (existingTask) continue;

      await prisma.task.create({
        data: {
          service: { connect: { serviceId: task.serviceId } },
          workshopJob: { connect: { workshopJobId: task.workshopJobId } },
          employees: { connect: { employeeId: task.employeeId } },
          description: task.description,
          status: task.status,
          createdBy: task.createdBy,
        },
      });
      count++;
    }

    console.log('Successfully seeded tasks:', count);
  } catch (error) {
    console.error('Error seeding tasks:', error);
    throw error;
  }
}
