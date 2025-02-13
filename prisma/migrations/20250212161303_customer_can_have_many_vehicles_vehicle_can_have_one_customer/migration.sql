/*
  Warnings:

  - The values [SERVICE,SERVICE_REQUEST] on the enum `UserReport_reportedEntityType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `_customertovehicle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_customertovehicle` DROP FOREIGN KEY `_CustomerToVehicle_A_fkey`;

-- DropForeignKey
ALTER TABLE `_customertovehicle` DROP FOREIGN KEY `_CustomerToVehicle_B_fkey`;

-- AlterTable
ALTER TABLE `userreport` MODIFY `reportedEntityType` ENUM('USER', 'WORKSHOP', 'REVIEW', 'REVIEW_RESPONSE') NOT NULL;

-- AlterTable
ALTER TABLE `vehicle` ADD COLUMN `customerId` BIGINT UNSIGNED NULL;

-- AlterTable
ALTER TABLE `workshopdeviceotp` MODIFY `employeeId` BIGINT UNSIGNED NULL;

-- DropTable
DROP TABLE `_customertovehicle`;

-- CreateIndex
CREATE INDEX `Vehicle_customerId_idx` ON `Vehicle`(`customerId`);

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `fk_vehicleIsOwnedByCustomer` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE NO ACTION ON UPDATE CASCADE;

ALTER TABLE `workshopdevice` MODIFY `status` ENUM('ENABLED', 'INACTIVE', 'DISABLED') NULL DEFAULT 'INACTIVE';
