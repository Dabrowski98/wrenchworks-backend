/* eslint-disable */
export default async () => {
  const t = {};
  return {
    '@nestjs/graphql': {
      models: [
        [
          import('./modules/user/dto/create-user.input'),
          {
            CreateUserInput: {
              username: {},
              password: {},
              email: { nullable: true },
              isVerified: { nullable: true },
              status: { nullable: true },
            },
          },
        ],
        [
          import('./modules/user/dto/update-user.input'),
          {
            UpdateUserInput: {
              username: { nullable: true },
              password: { nullable: true },
              email: { nullable: true },
              isVerified: { nullable: true },
              status: { nullable: true },
            },
          },
        ],
        [
          import('./modules/workshop/entities/workshop.entity'),
          {
            Workshop: {
              workshopId: {},
              personId: {},
              email: { nullable: true },
              isVerified: { nullable: true },
              isManagingWork: { nullable: true },
              createdAt: { nullable: true },
              updatedAt: { nullable: true },
              deletedAt: { nullable: true },
              customers: {},
            },
          },
        ],
        [
          import('./modules/customer/entities/customer.entity'),
          {
            Customer: {
              customerId: {},
              workshopId: {},
              totalDue: {},
              description: { nullable: true },
              deletedAt: { nullable: true },
              NIP: { nullable: true },
              companyName: { nullable: true },
              person: {},
              workshop: {},
            },
          },
        ],
        [
          import('./modules/person/entities/person.entity'),
          {
            Person: {
              personId: {},
              firstName: {},
              lastName: {},
              telephoneNumber: { nullable: true },
              deletedAt: { nullable: true },
              customers: {},
            },
          },
        ],
        [
          import('./modules/user/entities/user.entity'),
          {
            User: {
              userId: {},
              personId: { nullable: true },
              username: {},
              password: {},
              email: { nullable: true },
              isVerified: { nullable: true },
              status: { nullable: true },
              createdAt: { nullable: true },
              updatedAt: { nullable: true },
              deletedAt: { nullable: true },
              person: { nullable: true },
            },
          },
        ],
        [
          import('./modules/person/dto/create-person.input'),
          {
            CreatePersonInput: {
              firstName: {},
              lastName: {},
              telephoneNumber: { nullable: true },
            },
          },
        ],
        [
          import('./modules/person/dto/update-person.input'),
          {
            UpdatePersonInput: {
              firstName: { nullable: true },
              lastName: { nullable: true },
              telephoneNumber: { nullable: true },
            },
          },
        ],
        [
          import('./modules/vehicle-brand/dto/create-vehicle-brand.input'),
          { CreateVehicleBrandInput: { brandName: {} } },
        ],
        [
          import('./modules/vehicle-brand/entities/vehicle-brand.entity'),
          {
            VehicleBrand: {
              brandName: {},
              createdAt: { nullable: true },
              updatedAt: { nullable: true },
            },
          },
        ],
        [
          import('./modules/vehicle-model/dto/create-vehicle-model.input'),
          { CreateVehicleModelInput: { modelName: {}, brandName: {} } },
        ],
        [
          import('./modules/vehicle-model/dto/update-vehicle-model.input'),
          { UpdateVehicleModelInput: { modelName: {}, brandName: {} } },
        ],
        [
          import('./modules/vehicle-model/entities/vehicle-model.entity'),
          {
            VehicleModel: {
              modelName: {},
              brandName: {},
              createdAt: { nullable: true },
              updatedAt: { nullable: true },
              brand: {},
            },
          },
        ],
        [
          import('./modules/workshop/dto/create-workshop.input'),
          {
            CreateWorkshopInput: {
              personId: {},
              email: { nullable: true },
              isManagingWork: { nullable: true },
            },
          },
        ],
        [
          import('./modules/workshop/dto/update-workshop.input'),
          {
            UpdateWorkshopInput: {
              personId: {},
              email: { nullable: true },
              isVerified: { nullable: true },
              isManagingWork: { nullable: true },
            },
          },
        ],
        [
          import('./modules/customer/dto/create-customer.input'),
          {
            CreateCustomerInput: {
              customerId: {},
              workshopId: {},
              totalDue: {},
              description: { nullable: true },
              NIP: { nullable: true },
              companyName: { nullable: true },
            },
          },
        ],
        [
          import('./modules/customer/dto/update-customer.input'),
          {
            UpdateCustomerInput: {
              customerId: {},
              workshopId: {},
              totalDue: { nullable: true },
              description: { nullable: true },
              NIP: { nullable: true },
              companyName: { nullable: true },
              deletedAt: { nullable: true },
            },
          },
        ],
        [
          import('./modules/auth/entities/refresh-token.entity'),
          { RefreshToken: { id: {}, token: {}, expiresIn: {}, user: {} } },
        ],
      ],
    },
  };
};
