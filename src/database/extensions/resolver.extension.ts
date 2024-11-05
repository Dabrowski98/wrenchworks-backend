import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client/extension';

export const resolverExtension = Prisma.defineExtension({
  name: 'resolve',
  model: {
    $allModels: {
      async resolve<TModel>(
        this: TModel,
        id: bigint,
        fieldName: string,
      ): Promise<any> {
        const context = Prisma.getExtensionContext(this);
        const name = context.$name.toLowerCase() + "Id"
        try {
          const result = await (context as any).findUniqueOrThrow({
            where: { [name]: id },
            include: { [fieldName]: true },
          });

          return result[fieldName];
        } catch (error) {
          throw new Error(`Failed to resolve: ${error.message}`);
        }
      },
    },
  },
});
