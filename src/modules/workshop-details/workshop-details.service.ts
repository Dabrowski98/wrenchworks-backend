import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateWorkshopDetailsInput, UpdateWorkshopDetailsInput } from './dto/index';

@Injectable()
export class WorkshopDetailsService {
  constructor(private databaseService: DatabaseService) {}

  async createWorkshopDetails(data: CreateWorkshopDetailsInput) {
    return this.databaseService.workshopDetails.create({
      data: {
        workshopId: data.workshopId,
        rating: data.rating,
        workshopName: data.workshopName,
        description: data.description,
        telephoneNumber: data.telephoneNumber,
        logoURL: data.logoURL,
        NIP: data.NIP,
        deletedAt: data.deletedAt,
      },
    });
  }

  async updateWorkshopDetails(data: UpdateWorkshopDetailsInput) {
    return this.databaseService.workshopDetails.update({
      where: {
        workshopId: data.workshopId,
      },
      data: {
        rating: data.rating,
        workshopName: data.workshopName,
        description: data.description,
        telephoneNumber: data.telephoneNumber,
        logoURL: data.logoURL,
        status: data.status,
        NIP: data.NIP,
        deletedAt: data.deletedAt,
      },
    });
  }

  async findWorkshopDetailsById(workshopId: bigint) {
    return this.databaseService.workshopDetails.findUnique({
      where: {
        workshopId,
      },
    });
  }
}
