import { PrismaClient, ServiceStatus } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

const services = [
  // From service request 1 (Workshop 1, User customer)
  {
    serviceRequestId: 1n,
    workshopId: 1n,
    vehicleId: 1n,
    customerId: 1n, // Customer created for user 7n in workshop 1n
    employeeId: 1n,
    description: 'Regular maintenance check',
    serviceDescription: 'Oil change and brake inspection completed',
    status: ServiceStatus.PENDING,
    payedOff: false,
    paymentAmount: new Decimal('130.00'), // Sum of min prices for jobs 1 and 2
    serviceStartDate: new Date(),
    addedBy: 1n,
  },
  // From service request 2 (Workshop 2, User customer)
  {
    serviceRequestId: 2n,
    workshopId: 2n,
    vehicleId: 2n,
    customerId: 2n,
    employeeId: 2n,
    description: 'Engine making strange noises',
    serviceDescription: 'Diagnostic scan in progress',
    status: ServiceStatus.PENDING,
    payedOff: false,
    paymentAmount: new Decimal('1150.00'), // Sum of min prices for jobs 3 and 4
    addedBy: 2n,
  },
  // From service request 3 (Workshop 1, Guest customer)
  {
    serviceRequestId: 3n,
    workshopId: 1n,
    vehicleId: 5n,
    customerId: 3n,
    employeeId: 1n,
    description: 'Brake inspection needed',
    serviceDescription: 'Brake system inspection and maintenance',
    status: ServiceStatus.COMPLETED,
    payedOff: true,
    paymentAmount: new Decimal('80.00'), // Min price for job 2
    serviceStartDate: new Date(Date.now() - 24 * 60 * 60 * 1000), // Yesterday
    serviceEndDate: new Date(),
    addedBy: 1n,
    resolvedBy: 1n,
    resolvedAt: new Date(),
  },
  // New completed services
  {
    workshopId: 1n,
    vehicleId: 1n,
    customerId: 1n, // Krystian in workshop 1
    employeeId: 1n,
    description: 'Annual maintenance service',
    serviceDescription:
      'Full service including oil change, filters, and brake check',
    status: ServiceStatus.COMPLETED,
    payedOff: true,
    paymentAmount: new Decimal('280.00'),
    serviceStartDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    serviceEndDate: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000), // 29 days ago
    addedBy: 1n,
    resolvedBy: 1n,
    resolvedAt: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000),
  },
  {
    workshopId: 2n,
    vehicleId: 2n,
    customerId: 2n, // Krystian in workshop 2
    employeeId: 2n,
    description: 'Performance tuning',
    serviceDescription: 'Engine performance optimization and diagnostic',
    status: ServiceStatus.COMPLETED,
    payedOff: true,
    paymentAmount: new Decimal('1500.00'),
    serviceStartDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
    serviceEndDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
    addedBy: 2n,
    resolvedBy: 2n,
    resolvedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
  },
  {
    workshopId: 3n,
    vehicleId: 10n,
    customerId: 4n, // Barbara in workshop 3
    employeeId: 3n,
    description: 'Luxury vehicle maintenance',
    serviceDescription: 'Premium service package with ceramic coating',
    status: ServiceStatus.COMPLETED,
    payedOff: true,
    paymentAmount: new Decimal('580.00'),
    serviceStartDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    serviceEndDate: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), // 6 days ago
    addedBy: 3n,
    resolvedBy: 3n,
    resolvedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
  },
  // Completed service for user 7 in workshop 1
  {
    workshopId: 1n,
    vehicleId: 1n,
    customerId: 1n, // Assuming customerId 1 corresponds to userId 7
    employeeId: 1n,
    description: 'Regular maintenance check',
    serviceDescription: 'Oil change and brake inspection completed',
    status: ServiceStatus.COMPLETED,
    payedOff: true,
    paymentAmount: new Decimal('130.00'),
    serviceStartDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    serviceEndDate: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000), // 29 days ago
    addedBy: 1n,
    resolvedBy: 1n,
    resolvedAt: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000),
  },
  // Completed service for user 7 in workshop 2
  {
    workshopId: 2n,
    vehicleId: 2n,
    customerId: 2n, // Assuming customerId 2 corresponds to userId 7
    employeeId: 2n,
    description: 'Performance tuning',
    serviceDescription: 'Engine performance optimization and diagnostic',
    status: ServiceStatus.COMPLETED,
    payedOff: true,
    paymentAmount: new Decimal('1500.00'),
    serviceStartDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
    serviceEndDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
    addedBy: 2n,
    resolvedBy: 2n,
    resolvedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
  },
  // Completed service for user 8 in workshop 2
  {
    workshopId: 2n,
    vehicleId: 2n,
    customerId: 3n, // Assuming customerId 3 corresponds to userId 8
    employeeId: 2n,
    description: 'Engine making strange noises',
    serviceDescription: 'Diagnostic scan completed',
    status: ServiceStatus.COMPLETED,
    payedOff: true,
    paymentAmount: new Decimal('1150.00'),
    serviceStartDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
    serviceEndDate: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000), // 9 days ago
    addedBy: 2n,
    resolvedBy: 2n,
    resolvedAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000),
  },
];

export async function seedServices() {
  try {
    let count = 0;

    for (const service of services) {
      const existingService = await prisma.service.findFirst({
        where: {
          AND: [
            { workshopId: service.workshopId },
            { serviceRequestId: service.serviceRequestId },
          ],
        },
      });

      if (existingService) continue;

      await prisma.service.create({
        data: {
          serviceRequest: service.serviceRequestId
            ? { connect: { serviceRequestId: service.serviceRequestId } }
            : undefined,
          serviceRequestId: service.serviceRequestId ?? undefined,
          workshop: { connect: { workshopId: service.workshopId } },
          vehicle: { connect: { vehicleId: service.vehicleId } },
          customer: { connect: { customerId: service.customerId } },
          employee: { connect: { employeeId: service.employeeId } },
          description: service.description,
          serviceDescription: service.serviceDescription,
          status: service.status,
          payedOff: service.payedOff,
          paymentAmount: service.paymentAmount,
          serviceStartDate: service.serviceStartDate,
          serviceEndDate: service.serviceEndDate,
          addedBy: service.addedBy,
          resolvedAt: service.resolvedAt,
          resolvedBy: service.resolvedBy,
        },
      });
      count++;
    }

    console.log('Successfully seeded services:', count);
  } catch (error) {
    console.error('Error seeding services:', error);
    throw error;
  }
}
