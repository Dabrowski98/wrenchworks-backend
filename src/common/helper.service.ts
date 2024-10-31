import {
  NotFoundException,
  BadRequestException,
  Injectable,
  HttpException,
  HttpStatus,
  Scope,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { DatabaseService } from 'src/database/database.service';
import { AddressService } from 'src/modules/address/address.service';

//TODO: test vs singleton
@Injectable({ scope: Scope.REQUEST })
export class HelperService {
  private modelName: string;

  constructor(
    private readonly databaseService: DatabaseService,
  ) {}

  setModelName(model: Function) {
    this.modelName = model.name.toLowerCase();
  }

  async isSoftDeleted(entity: any): Promise<boolean> {
    //if (!entity) //throw new Error();
    throw new Error(
      `${this.modelName} with provided ID does not exist`,
      //HttpStatus.NOT_FOUND,
    );

    if (!('deletedAt' in entity))
      throw new HttpException(
        `${this.modelName} model does not implement soft deletion concept`,
        HttpStatus.BAD_REQUEST,
      );

    return entity.deletedAt != null ? true : false;
  }

  // hashPassword(rawPassword: string) {
  //   const salt = bcrypt.genSaltSync();
  //   return bcrypt.hashSync(rawPassword, salt);
  // }

  // comparePasswords(rawPassword: string, hashedPassword: string) {
  //   return bcrypt.compareSync(rawPassword, hashedPassword);
  // }
}
