import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateWorkshopJobInput, UpdateWorkshopJobInput } from './dto/index';

@Injectable()
export class WorkshopJobService {
  constructor(private databaseService: DatabaseService) {}

  async createWorkshopJob(data: CreateWorkshopJobInput) {
    return this.databaseService.workshopJob.create({
      data: {
        workshopId: data.workshopId,
        jobId: data.jobId,
        workshopDescription: data.workshopDescription,
        minPrice: data.minPrice,
        maxPrice: data.maxPrice,
        price: data.price,
        availability: data.availability,
      },
    });
  }

  async updateWorkshopJob(data: UpdateWorkshopJobInput) {
    return this.databaseService.workshopJob.update({
      where: {
        workshopJobId: data.workshopJobId,
      },
      data: {
        workshopDescription: data.workshopDescription,
        minPrice: data.minPrice,
        maxPrice: data.maxPrice,
        price: data.price,
        availability: data.availability,
      },
    });
  }

  async findWorkshopJobById(workshopJobId: bigint) {
    return this.databaseService.workshopJob.findUnique({
      where: {
        workshopJobId,
      },
      include: {
        job: true,
        workshop: true,
      },
    });
  }
}
