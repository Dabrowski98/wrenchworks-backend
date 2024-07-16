import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateWorkshopInput } from './dto/create-workshop.input';
import { UpdateWorkshopInput } from './dto/update-workshop.input';
import { isSoftDeleted } from 'src/common/helper/softdeletion';

@Injectable()
export class WorkshopService {
  constructor(private databaseService: DatabaseService) {}

  async createWorkshop(data: CreateWorkshopInput) {
    return this.databaseService.workshop.create({
      data: {
        personId: data.personId,
        email: data.email,
        isManagingWork: data.isManagingWork,
      },
    });
  }

  async findWorkshops() {
    return this.databaseService.workshop.findMany();
  }

  async findWorkshopById(id: bigint) {
    const workshop = await this.databaseService.workshop.findUnique({
      where: {
        workshopId: id,
        deletedAt: null,
      },
    });

    if (!workshop) {
      throw new NotFoundException(`Workshop with id ${id} not found`);
    }

    return workshop;
  }

  async updateWorkshop(id: bigint, data: UpdateWorkshopInput) {
    await this.findWorkshopById(id);
    return this.databaseService.workshop.update({
      where: { workshopId: id },
      data,
    });
  }

  async deleteWorkshop(id: bigint) {
    await this.findWorkshopById(id);
    return this.databaseService.workshop.update({
      where: {
        workshopId: id,
        deletedAt: null,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  async destroyWorkshop(id: bigint) {
    await this.isDestroyable({ id });
    return this.databaseService.workshop.delete({ where: { workshopId: id } });
  }

  async retrieveWorkshop(id: bigint) {
    await this.isRetrievable({ id });

    return this.databaseService.workshop.update({
      data: { deletedAt: null },
      where: { workshopId: id },
    });
  }

  async isDestroyable(where: Record<string, any>) {
    await isSoftDeleted(where, 'workshop', 'delete');
  }

  async isRetrievable(where: Record<string, any>) {
    await isSoftDeleted(where, 'workshop', 'retrieve');
  }
}
