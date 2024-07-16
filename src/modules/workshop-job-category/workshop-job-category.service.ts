import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateWorkshopJobCategoryInput, UpdateWorkshopJobCategoryInput } from './dto';

@Injectable()
export class WorkshopJobCategoryService {
  constructor(private databaseService: DatabaseService) {}

  async createWorkshopJobCategory(data: CreateWorkshopJobCategoryInput) {
    return this.databaseService.workshopJobCategory.create({
      data: {
        workshopId: data.workshopId,
        categoryId: data.categoryId,
      },
    });
  }

  async updateWorkshopJobCategory(data: UpdateWorkshopJobCategoryInput) {
    return this.databaseService.workshopJobCategory.update({
      where: { workshopId_categoryId: { workshopId: data.workshopId, categoryId: data.categoryId } },
      data: {
        workshopId: data.workshopId,
        categoryId: data.categoryId,
      },
    });
  }

  async findAllWorkshopJobCategories() {
    return this.databaseService.workshopJobCategory.findMany();
  }

  async findWorkshopJobCategory(workshopId: bigint, categoryId: bigint) {
    return this.databaseService.workshopJobCategory.findUnique({
      where: { workshopId_categoryId: { workshopId, categoryId } },
    });
  }

  async deleteWorkshopJobCategory(workshopId: bigint, categoryId: bigint) {
    return this.databaseService.workshopJobCategory.delete({
      where: { workshopId_categoryId: { workshopId, categoryId } },
    });
  }
}
