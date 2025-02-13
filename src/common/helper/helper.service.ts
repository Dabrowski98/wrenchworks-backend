import { Injectable, Scope } from '@nestjs/common';
import {
  DeletedAtFieldNotFound,
  RecordNotFoundError,
} from '../custom-errors/errors.config';

@Injectable({ scope: Scope.REQUEST })
export class HelperService {
  private model: { name: string };

  setModelName(model: { name: string }) {
    this.model = model;
  }

  async isSoftDeleted(entity: any): Promise<boolean> {
    if (!entity) throw new RecordNotFoundError(this.model);

    if (!('deletedAt' in entity)) throw new DeletedAtFieldNotFound(this.model);

    return entity.deletedAt != null ? true : false;
  }
}
