import { Injectable, Scope } from '@nestjs/common';
import {
  DeletedAtFieldNotFoundError,
  RecordNotFoundError,
} from '../custom-errors/errors.config';

//TODO: test vs singleton
@Injectable({ scope: Scope.REQUEST })
export class HelperService {
  private modelName: string = 'Model';

  setModelName(model: Function) {
    this.modelName = model.name.toLowerCase();
  }

  async isSoftDeleted(entity: any): Promise<boolean> {
    if (!entity) throw new RecordNotFoundError();

    if (!('deletedAt' in entity))
      throw new DeletedAtFieldNotFoundError(
        `${this.modelName} does not implement soft deletion concept`,
      );

    return entity.deletedAt != null ? true : false;
  }
}
