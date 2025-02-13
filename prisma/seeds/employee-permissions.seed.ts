import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const customConditions = {};

const subjects = [
  'Address',                //create,       update, delete
  'Employee',               //create, read, update, delete
  'Customer',               //create, read, update, delete
  'EmployeePermission',     //        read, update
  'Guest',                  //        read, update, delete
  'JoinWorkshopRequest',    //create, read, update, delete
  'Service',                //create, read, update, delete, resolve
  'ServiceRequest',         //        read, update, delete, resolve
  'Task',                   //create, read, update, delete, resolve
  'Vehicle',                //create, read, update, delete
  'VehicleDetails',         //create, read, update, delete
  'Workshop',               //              update
  'WorkshopDetails',        //              update
  'WorkshopDevice',         //        read, update,       , resolve
  'WorkshopJob',            //create, read, update, delete
];

enum Action {
  Create = 'Create',
  Read = 'Read',
  Update = 'Update',
  Delete = 'Delete',
  Resolve = 'Resolve',
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
