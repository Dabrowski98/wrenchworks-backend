/*
  Warnings:

  - You are about to drop the `_addressworkshops` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[addressId]` on the table `Workshop` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `_addressworkshops` DROP FOREIGN KEY `_AddressWorkshops_A_fkey`;

-- DropForeignKey
ALTER TABLE `_addressworkshops` DROP FOREIGN KEY `_AddressWorkshops_B_fkey`;

-- AlterTable
ALTER TABLE `workshop` ADD COLUMN `addressId` BIGINT UNSIGNED NULL;

-- DropTable
DROP TABLE `_addressworkshops`;

-- CreateIndex
CREATE UNIQUE INDEX `Workshop_addressId_key` ON `Workshop`(`addressId`);

-- AddForeignKey
ALTER TABLE `Workshop` ADD CONSTRAINT `Workshop_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Address`(`addressId`) ON DELETE NO ACTION ON UPDATE CASCADE;
