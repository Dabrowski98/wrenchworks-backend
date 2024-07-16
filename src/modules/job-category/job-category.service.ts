import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { CreateJobCategoryInput, UpdateJobCategoryInput } from './dto';

@Injectable()
export class JobCategoryService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createJobCategory(data: CreateJobCategoryInput) {
    return this.databaseService.jobCategory.create({
      data: {
        name: data.name,
        parentId: data.parentId,
        description: data.description,
        isPopular: data.isPopular,
      },
    });
  }

  async updateJobCategory(id: bigint, data: UpdateJobCategoryInput) {
    return this.databaseService.jobCategory.update({
      where: { categoryId: id },
      data: {
        name: data.name,
        parentId: data.parentId,
        description: data.description,
        isPopular: data.isPopular,
      },
    });
  }

  async deleteJobCategory(id: bigint) {
    return this.databaseService.jobCategory.delete({
      where: { categoryId: id },
    });
  }

  async findAllJobCategories() {
    return this.databaseService.jobCategory.findMany();
  }

  async findOneJobCategory(id: bigint) {
    return this.databaseService.jobCategory.findUnique({
      where: { categoryId: id },
    });
  }
}
