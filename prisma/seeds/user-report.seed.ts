import {
  PrismaClient,
  UserReportStatus,
  UserReportType,
  UserReportReportedEntityType,
} from '@prisma/client';

const prisma = new PrismaClient();

const userReports = [
  // User reporting a workshop
  {
    userId: 7n, // usercustomer1
    reportText: 'Workshop is not following safety protocols during repairs',
    reportType: UserReportType.VIOLATION_OF_TERMS,
    reportedEntityType: UserReportReportedEntityType.WORKSHOP,
    reportedId: 2n, // Workshop 2
    status: UserReportStatus.PENDING,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
  },
  // User reporting a review
  {
    userId: 8n, // usercustomer2
    reportText: 'This review contains offensive language and personal attacks',
    reportType: UserReportType.OFFENSIVE_CONTENT,
    reportedEntityType: UserReportReportedEntityType.REVIEW,
    reportedId: 1n, // First review
    status: UserReportStatus.ACTIVE,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
  },
  // User reporting a service
  {
    userId: 7n, // usercustomer1
    reportText: 'Service was performed without authorization',
    reportType: UserReportType.FRAUDULENT_ACTIVITY,
    reportedEntityType: UserReportReportedEntityType.SERVICE,
    reportedId: 2n, // Service in Workshop 2
    status: UserReportStatus.CLOSED,
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
    updatedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000), // 8 days ago
    updatedBy: 1n, // Updated by employee
  },
  // New reports
  {
    userId: 8n, // usercustomer2
    reportText: 'Workshop is using fake profile information',
    reportType: UserReportType.FAKE_WORKSHOP,
    reportedEntityType: UserReportReportedEntityType.WORKSHOP,
    reportedId: 3n, // Workshop 3
    status: UserReportStatus.ACTIVE,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
  },
  {
    userId: 9n, // usercustomer3
    reportText: 'Review response contains harassment and threats',
    reportType: UserReportType.HARRASMENT,
    reportedEntityType: UserReportReportedEntityType.REVIEW_RESPONSE,
    reportedId: 1n, // First review response
    status: UserReportStatus.PENDING,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    userId: 10n, // usercustomer4
    reportText: 'Service request contains spam advertisement',
    reportType: UserReportType.SPAM,
    reportedEntityType: UserReportReportedEntityType.SERVICE_REQUEST,
    reportedId: 4n, // Service request 4
    status: UserReportStatus.CLOSED,
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
    updatedBy: 2n,
  },
  {
    userId: 11n, // usercustomer5
    reportText: 'User is impersonating workshop staff',
    reportType: UserReportType.WORKSHOP_IMPERSONATION,
    reportedEntityType: UserReportReportedEntityType.USER,
    reportedId: 12n, // Another user
    status: UserReportStatus.ACTIVE,
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
  },
  {
    userId: 9n, // usercustomer3
    reportText: 'Privacy violation in service details',
    reportType: UserReportType.PRIVACY_VIOLATION,
    reportedEntityType: UserReportReportedEntityType.SERVICE,
    reportedId: 3n, // Service 3
    status: UserReportStatus.PENDING,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
  },
];

export async function seedUserReports() {
  try {
    let count = 0;

    for (const report of userReports) {
      const existingReport = await prisma.userReport.findFirst({
        where: {
          AND: [
            { userId: report.userId },
            { reportedEntityType: report.reportedEntityType },
            { reportedId: report.reportedId },
          ],
        },
      });

      if (existingReport) continue;

      // Verify if reported entity exists
      const entityExists = await verifyReportedEntity(
        report.reportedEntityType,
        report.reportedId,
      );

      if (!entityExists) continue;

      await prisma.userReport.create({
        data: {
          user: { connect: { userId: report.userId } },
          reportText: report.reportText,
          reportType: report.reportType,
          reportedEntityType: report.reportedEntityType,
          reportedId: report.reportedId,
          status: report.status,
          createdAt: report.createdAt,
          updatedAt: report.updatedAt,
          updatedBy: report.updatedBy,
        },
      });
      count++;
    }

    console.log('Successfully seeded user reports:', count);
  } catch (error) {
    console.error('Error seeding user reports:', error);
    throw error;
  }
}

async function verifyReportedEntity(
  entityType: UserReportReportedEntityType,
  entityId: bigint,
): Promise<boolean> {
  switch (entityType) {
    case UserReportReportedEntityType.WORKSHOP:
      return !!(await prisma.workshop.findUnique({
        where: { workshopId: entityId },
      }));
    case UserReportReportedEntityType.REVIEW:
      return !!(await prisma.review.findUnique({
        where: { reviewId: entityId },
      }));
    case UserReportReportedEntityType.SERVICE:
      return !!(await prisma.service.findUnique({
        where: { serviceId: entityId },
      }));
    // Add other cases as needed
    default:
      return false;
  }
}
