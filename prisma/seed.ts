import { PrismaClient } from '@prisma/client';
import './seeds/employee-permissions.seed';
import { seedAddresses } from './seeds/address.seed';
import { seedVehicleBrands } from './seeds/vehicle-brand.seed';
import { seedVehicleModels } from './seeds/vehicle-model.seed';
import { seedJobCategories } from './seeds/job-category.seed';
import { seedJobs } from './seeds/job.seed';
import { seedUsers } from './seeds/user.seed';
import { seedWorkshops } from './seeds/workshop.seed';
import { seedVehicles } from './seeds/vehicle.seed';
import { seedGuests } from './seeds/guest.seed';
import { seedCustomers } from './seeds/customer.seed';
import { seedEmployees } from './seeds/employee.seed';
import { seedServiceRequests } from './seeds/service-request.seed';
import { seedWorkshopJobs } from './seeds/workshop-job.seed';
import { seedWorkshopDevices } from './seeds/workshop-device.seed';
import { seedJoinWorkshopRequests } from './seeds/join-workshop-request.seed';
import { seedServices } from './seeds/service.seed';
import { seedReviews } from './seeds/review.seed';
import { seedUserReports } from './seeds/user-report.seed';
import { seedTasks } from './seeds/task.seed';
import { seedReviewResponses } from './seeds/review-response.seed';

const prisma = new PrismaClient();

async function main() {
  await require('./seeds/employee-permissions.seed');
    await seedAddresses();
  await seedVehicleBrands();
  await seedVehicleModels();
  await seedJobCategories();
  await seedJobs();
  await seedUsers();
  await seedWorkshops();
  await seedVehicles();
  await seedGuests();
     await seedEmployees();
     await seedCustomers();
  await seedServiceRequests();
  await seedWorkshopJobs();
  await seedWorkshopDevices();
  await seedJoinWorkshopRequests();
  await seedServices();
  await seedReviews();
  await seedUserReports();
  await seedTasks();
  await seedReviewResponses();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
