import { createSoftDeleteExtension } from 'prisma-extension-soft-delete';

export const softDeleteExtension = createSoftDeleteExtension({
  models: {
    Person: true,
  },
  defaultConfig: {
    field: 'deletedAt',
    createValue: (deleted) => {
      if (deleted) return new Date();
      return null;
    },
    allowToOneUpdates: true,
    allowCompoundUniqueIndexWhere: true,
  },
});
