import { createSoftDeleteExtension } from 'prisma-extension-soft-delete';

export const softDeleteExtension = createSoftDeleteExtension({
  models: {
    Workshop: true,
    Employee: true,
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
