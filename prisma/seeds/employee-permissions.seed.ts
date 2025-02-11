import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const customConditions = {};

const subjects = [
  'Address',
  'Workshop',
  'WorkshopDetails',
  'Employee',
  'Customer',
  'Service',
  'ServiceRequest',
  'Task',
  'EmployeePermission',
  'WorkshopJob',
  'WorkshopDeviceOTP',
  'WorkshopDevice',
  'JobCategory',
  'JoinWorkshopRequest',
];

enum Action {
  Create = 'Create',
  Read = 'Read',
  Update = 'Update',
  Delete = 'Delete',
}

async function seedEmployeePermissions() {
  try {
    const permissions = [];
    for (const subject of subjects) {
      for (const action of Object.values(Action)) {
        if (subject === 'Workshop' && action !== Action.Update) {
          continue;
        }

        const permissionKey = `${action}_${subject}`;

        permissions.push({
          name: permissionKey,
          description: `Can ${action.toLowerCase()} ${subject}`,
          action: action,
          subject: subject,
          conditions: customConditions[permissionKey] || undefined,
        });
      }
    }

    await prisma.employeePermission.createMany({
      data: permissions,
      skipDuplicates: true,
    });

    console.log('Employee permissions seeded successfully');
  } catch (error) {
    console.error('Error seeding employee permissions:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedEmployeePermissions();
