/*
  Warnings:

  - You are about to drop the column `brandName` on the `vehicle` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `vehicle` DROP FOREIGN KEY `fk_vehicleHasBrand`;

-- AlterTable
ALTER TABLE `person` MODIFY `addressId` BIGINT UNSIGNED NULL;

-- AlterTable
ALTER TABLE `vehicle` DROP COLUMN `brandName`;
