import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
import { isSoftDeleted } from 'src/common/helper/softdeletion';

@Injectable()
export class PersonService {
  constructor(private databaseService: DatabaseService) {}

  async createPerson(data: CreatePersonInput) {
    return this.databaseService.person.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        telephoneNumber: data.telephoneNumber,
      },
    });
  }


  async findPersons() {
    return this.databaseService.person.findMany();
  }

  async findPersonById(id: bigint) {
    const person = await this.databaseService.person.findUnique({
      where: {
        personId: id,
        deletedAt: null,
      },
    });

    if (!person) {
      throw new NotFoundException(`Person with id ${id} not found`);
    }

    return person;
  }

  async updatePerson(id: bigint, data: UpdatePersonInput) {
    await this.findPersonById(id);
    return this.databaseService.person.update({
      where: { personId: id },
      data,
    });
  }

  
  async deletePerson(id: bigint) {
    await this.findPersonById(id);
    return this.databaseService.person.update({
      where: {
        personId: id,
        deletedAt: null,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }


  async destroyPerson(id: bigint) {
    await this.isDestroyable({ id });
    return this.databaseService.person.delete({ where: { personId: id } });
  }


  async retrievePerson(id: bigint) {
    await this.isRetrievable({ id });

    return this.databaseService.person.update({
      data: { deletedAt: null },
      where: { personId: id },
    });
  }

  async isDestroyable(where: Record<string, any>) {
    await isSoftDeleted(where, 'person', 'delete');
  }

  async isRetrievable(where: Record<string, any>) {
    await isSoftDeleted(where, 'person', 'retrieve');
  }
}
