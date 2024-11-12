import { Prisma } from '@prisma/client';
import { RecordNotFoundError } from 'src/common/custom-errors/errors.config';

export const existsOrThrowExtension = Prisma.defineExtension({
  name: 'existsOrThrow',
  model: {
    $allModels: {
      async existsOrThrow<
        TModel,
        TArgs extends Prisma.Args<TModel, 'findUniqueOrThrow'>,
      >(
        this: TModel,
        args?: Prisma.Exact<TArgs, Prisma.Args<TModel, 'findUniqueOrThrow'>>,
      ): Promise<boolean> {
        const context = Prisma.getExtensionContext(this);

        try {
          await (context as any).findUniqueOrThrow(args);
          return true;
        } catch {
          throw new RecordNotFoundError(this as any);
        }
      },
    },
  },
});
