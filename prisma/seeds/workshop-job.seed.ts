import { PrismaClient } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

const workshopJobs = [
  // Workshop 1 - General Maintenance Shop
  {
    workshopId: 1n,
    jobId: 1n,
    workshopJobDescription:
      'Standard oil change service with filter replacement',
    minPrice: new Decimal('30.00'),
    maxPrice: new Decimal('50.00'),
    availability: true,
  },
  {
    workshopId: 1n,
    jobId: 2n,
    workshopJobDescription: 'Complete brake inspection and pad replacement',
    minPrice: new Decimal('80.00'),
    maxPrice: new Decimal('150.00'),
    availability: true,
  },
  {
    workshopId: 1n,
    jobId: 3n,
    workshopJobDescription: 'Basic engine diagnostic scan',
    minPrice: new Decimal('50.00'),
    maxPrice: new Decimal('100.00'),
    availability: true,
  },
  {
    workshopId: 1n,
    jobId: 4n,
    workshopJobDescription: 'Minor engine repairs and maintenance',
    minPrice: new Decimal('200.00'),
    maxPrice: new Decimal('500.00'),
    availability: true,
  },
  // Workshop 2 - Specialized Engine Shop
  {
    workshopId: 2n,
    jobId: 1n,
    workshopJobDescription: 'Premium synthetic oil change service',
    minPrice: new Decimal('50.00'),
    maxPrice: new Decimal('80.00'),
    availability: true,
  },
  {
    workshopId: 2n,
    jobId: 2n,
    workshopJobDescription: 'Performance brake system upgrade',
    minPrice: new Decimal('200.00'),
    maxPrice: new Decimal('400.00'),
    availability: true,
  },
  {
    workshopId: 2n,
    jobId: 3n,
    workshopJobDescription:
      'Advanced engine diagnostics with specialized equipment',
    minPrice: new Decimal('150.00'),
    maxPrice: new Decimal('300.00'),
    availability: true,
  },
  {
    workshopId: 2n,
    jobId: 4n,
    workshopJobDescription: 'Major engine overhaul and performance tuning',
    minPrice: new Decimal('1000.00'),
    maxPrice: new Decimal('3000.00'),
    availability: true,
  },
  // Workshop 3 - Luxury Vehicle Specialist
  {
    workshopId: 3n,
    jobId: 1n,
    workshopJobDescription:
      'Luxury vehicle oil service with premium synthetic oil',
    minPrice: new Decimal('80.00'),
    maxPrice: new Decimal('120.00'),
    availability: true,
  },
  {
    workshopId: 3n,
    jobId: 2n,
    workshopJobDescription:
      'High-performance ceramic brake system installation',
    minPrice: new Decimal('300.00'),
    maxPrice: new Decimal('600.00'),
    availability: true,
  },
  {
    workshopId: 3n,
    jobId: 3n,
    workshopJobDescription:
      'Computerized diagnostic testing for luxury vehicles',
    minPrice: new Decimal('200.00'),
    maxPrice: new Decimal('400.00'),
    availability: true,
  },
  {
    workshopId: 3n,
    jobId: 4n,
    workshopJobDescription: 'Complete engine restoration and optimization',
    minPrice: new Decimal('2000.00'),
    maxPrice: new Decimal('5000.00'),
    availability: true,
  },
];

export async function seedWorkshopJobs() {
  try {
    let count = 0;

    for (const workshopJob of workshopJobs) {
      const existingWorkshopJob = await prisma.workshopJob.findFirst({
        where: {
          workshopId: workshopJob.workshopId,
          jobId: workshopJob.jobId,
        },
      });

      if (existingWorkshopJob) continue;

      await prisma.workshopJob.create({
        data: {
          workshop: { connect: { workshopId: workshopJob.workshopId } },
          job: { connect: { jobId: workshopJob.jobId } },
          workshopJobDescription: workshopJob.workshopJobDescription,
          minPrice: workshopJob.minPrice,
          maxPrice: workshopJob.maxPrice,
          availability: workshopJob.availability,
        },
      });
      count++;
    }

    console.log('Successfully seeded workshop jobs:', count);
  } catch (error) {
    console.error('Error seeding workshop jobs:', error);
    throw error;
  }
}
