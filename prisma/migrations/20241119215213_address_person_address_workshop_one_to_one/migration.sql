/*
  Warnings:

  - A unique constraint covering the columns `[addressId]` on the table `Person` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[addressId]` on the table `Workshop` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Person_addressId_key` ON `Person`(`addressId`);

-- CreateIndex
CREATE UNIQUE INDEX `Workshop_addressId_key` ON `Workshop`(`addressId`);
