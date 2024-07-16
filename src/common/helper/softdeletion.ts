import { NotFoundException, BadRequestException } from '@nestjs/common';
import { DatabaseService as databaseService } from 'src/database/database.service';

type PrismaModelDelegate = {
  findUnique: (args: any) => Promise<any>;
};

export async function isSoftDeleted(
  where: Record<string, any>, 
  modelName: string,
  actionName: string,
) {
  const model = databaseService[modelName] as PrismaModelDelegate;

  const entity = await model.findUnique({
     where,
  });

  if (!entity) {
    throw new NotFoundException(
      `${modelName} with ${JSON.stringify(where)} does not exist in the database`,
    );
  }

  if (!entity.deletedAt) {
    throw new BadRequestException(
      `Cannot ${actionName} an existing not soft-deleted ${modelName}`,
    );
  }
}