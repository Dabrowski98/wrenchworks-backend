import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const customConditions = {
  // Address permissions
  Create_Address: {
    workshop: { workshopId: '$workshopId' },
  },
  Update_Address: {
    workshop: { workshopId: '$workshopId' },
  },
  Delete_Address: {
    workshop: { workshopId: '$workshopId' },
  },

  // Employee permissions
  Create_Employee: {
    workshop: { workshopId: '$workshopId' },
  },
  Read_Employee: {
    workshop: { workshopId: '$workshopId' },
  },
  Update_Employee: {
    workshop: { workshopId: '$workshopId' },
  },
  Delete_Employee: {
    workshop: { workshopId: '$workshopId' },
  },

  // Customer permissions
  Create_Customer: {
    workshop: { workshopId: '$workshopId' },
  },
  Read_Customer: {
    workshop: { workshopId: '$workshopId' },
  },
  Update_Customer: {
    workshop: { workshopId: '$workshopId' },
  },
  Delete_Customer: {
    workshop: { workshopId: '$workshopId' },
  },

  // EmployeePermission permissions
  Read_EmployeePermission: {
    employee: {
      is: { workshop: { workshopId: '$workshopId' } },
    },
  },
  Update_EmployeePermission: {
    employee: {
      is: { workshop: { workshopId: '$workshopId' } },
    },
  },

  // Guest permissions
  Read_Guest: { serviceRequest: { workshopId: '$workshopId' } },
  Update_Guest: { serviceRequest: { workshopId: '$workshopId' } },
  Delete_Guest: { serviceRequest: { workshopId: '$workshopId' } },

  // JoinWorkshopRequest permissions
  Create_JoinWorkshopRequest: {
    workshop: { workshopId: '$workshopId' },
  },
  Read_JoinWorkshopRequest: {
    workshop: { workshopId: '$workshopId' },
  },
  Update_JoinWorkshopRequest: {
    workshop: { workshopId: '$workshopId' },
  },
  Delete_JoinWorkshopRequest: {
    workshop: { workshopId: '$workshopId' },
  },

  // Service permissions
  Create_Service: {
    workshop: { workshopId: '$workshopId' },
  },
  Read_Service: {
    workshop: { workshopId: '$workshopId' },
  },
  Update_Service: {
    workshop: { workshopId: '$workshopId' },
  },
  Delete_Service: {
    workshop: { workshopId: '$workshopId' },
  },
  Resolve_Service: {
    workshop: { workshopId: '$workshopId' },
  },

  // ServiceRequest permissions
  Read_ServiceRequest: {
    workshop: { workshopId: '$workshopId' },
  },
  Update_ServiceRequest: {
    workshop: { workshopId: '$workshopId' },
  },
  Delete_ServiceRequest: {
    workshop: { workshopId: '$workshopId' },
  },
  Resolve_ServiceRequest: {
    workshop: { workshopId: '$workshopId' },
  },

  // Task permissions
  Create_Task: {
    service: {
      is: { workshop: { workshopId: '$workshopId' } },
    },
  },
  Read_Task: {
    service: {
      is: { workshop: { workshopId: '$workshopId' } },
    },
  },
  Update_Task: {
    service: {
      is: { workshop: { workshopId: '$workshopId' } },
    },
  },
  Delete_Task: {
    service: {
      is: { workshop: { workshopId: '$workshopId' } },
    },
  },
  Resolve_Task: {
    service: {
      is: { workshop: { workshopId: '$workshopId' } },
    },
  },

  // Vehicle permissions
  Create_Vehicle: { customer: { workshopId: '$workshopId' } },
  Read_Vehicle: { customer: { workshopId: '$workshopId' } },
  Update_Vehicle: { customer: { workshopId: '$workshopId' } },
  Delete_Vehicle: { customer: { workshopId: '$workshopId' } },

  // VehicleDetails permissions
  Create_VehicleDetails: {
    vehicle: { is: { customer: { workshopId: '$workshopId' } } },
  },
  Read_VehicleDetails: {
    vehicle: { is: { customer: { workshopId: '$workshopId' } } },
  },
  Update_VehicleDetails: {
    vehicle: { is: { customer: { workshopId: '$workshopId' } } },
  },
  Delete_VehicleDetails: {
    vehicle: { is: { customer: { workshopId: '$workshopId' } } },
  },

  // Workshop permissions
  Update_Workshop: { workshopId: '$workshopId' },

  // WorkshopDetails permissions
  Update_WorkshopDetails: {
    workshop: { workshopId: '$workshopId' },
  },

  // WorkshopDevice permissions
  Read_WorkshopDevice: {
    workshop: { workshopId: '$workshopId' },
  },
  Update_WorkshopDevice: {
    workshop: { workshopId: '$workshopId' },
  },
  Resolve_WorkshopDevice: {
    workshop: { workshopId: '$workshopId' },
  },

  // WorkshopJob permissions
  Create_WorkshopJob: {
    workshop: { workshopId: '$workshopId' },
  },
  Read_WorkshopJob: {
    workshop: { workshopId: '$workshopId' },
  },
  Update_WorkshopJob: {
    workshop: { workshopId: '$workshopId' },
  },
  Delete_WorkshopJob: {
    workshop: { workshopId: '$workshopId' },
  },
};

const subjectActions = {
  Address: ['Create', 'Update', 'Delete'],
  Employee: ['Create', 'Read', 'Update', 'Delete'],
  Customer: ['Create', 'Read', 'Update', 'Delete'],
  EmployeePermission: ['Read', 'Update'],
  Guest: ['Read', 'Update', 'Delete'],
  JoinWorkshopRequest: ['Create', 'Read', 'Update', 'Delete'],
  Service: ['Create', 'Read', 'Update', 'Delete', 'Resolve'],
  ServiceRequest: ['Read', 'Update', 'Delete', 'Resolve'],
  Task: ['Create', 'Read', 'Update', 'Delete', 'Resolve'],
  Vehicle: ['Create', 'Read', 'Update', 'Delete'],
  VehicleDetails: ['Create', 'Read', 'Update', 'Delete'],
  Workshop: ['Update'],
  WorkshopDetails: ['Update'],
  WorkshopDevice: ['Read', 'Update', 'Resolve'],
  WorkshopJob: ['Create', 'Read', 'Update', 'Delete'],
};

// const subjects = [
//   'Address',                        //create,       update, delete         , { workshop: { workshopId: x, ownerId: y}}
//   'Employee',                       //create, read, update, delete         , { workshop: { workshopId: x, ownerId: y}}
//   'Customer',                       //create, read, update, delete         , { workshop: { workshopId: x, ownerId: y}}
//   'EmployeePermission',             //        read, update                 , { employee:{ workshop: { workshopId: x, ownerId: y}}}
//   'Guest',                          //        read, update, delete         , { serviceRequest: { workshopId: x} }
//   'JoinWorkshopRequest',            //create, read, update, delete         , { workshop: { workshopId: x, ownerId: y}}
//   'Service',                        //create, read, update, delete, resolve, { workshop: { workshopId: x, ownerId: y}}
//   'ServiceRequest',                 //        read, update, delete, resolve, { workshop: { workshopId: x, ownerId: y}}
//   'Task',                           //create, read, update, delete, resolve, { service: { workshop: { workshopId: x, ownerId: y}}}
//   'Vehicle',                        //create, read, update, delete         , create { customer: { workshopId: x}}                           DLA USERA to samo tylko zamiast workshopid ownerId
//   'VehicleDetails',                 //create, read, update, delete         , { vehicle: {customer: { workshopId: x}}}                       DLA USERA to samo tylko zamiast workshopid ownerId
//   'Workshop',                       //              update                 , update { workshopId: x, ownerId: y }                           DLA USERA      create { user: { userId: x}}
//   'WorkshopDetails',                //              update                 , update { workshop: { workshopId: x, ownerId: y}}
//   'WorkshopDevice',                 //        read, update,       , resolve, { workshop: { workshopId: x, ownerId: y}}
//   'WorkshopJob',                    //create, read, update, delete         , { workshop: { workshopId: x, ownerId: y}}
// ];

async function seedEmployeePermissions() {
  try {
    const permissions = [];
    for (const [subject, actions] of Object.entries(subjectActions)) {
      for (const action of actions) {
        const permissionKey = `${action}_${subject}`;

        permissions.push({
          name: permissionKey,
          description: `Can ${action.toLowerCase()} ${subject}`,
          action: action,
          subject: subject,
          conditions: customConditions[permissionKey],
        });
      }
    }

    const result = await prisma.employeePermission.createMany({
      data: permissions,
      skipDuplicates: true,
    });

    console.log('Employee permissions seeded successfully', result.count);
  } catch (error) {
    console.error('Error seeding employee permissions:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedEmployeePermissions();
