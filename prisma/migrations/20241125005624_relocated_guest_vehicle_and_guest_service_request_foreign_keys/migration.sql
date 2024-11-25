/*
  Warnings:

  - You are about to drop the column `serviceRequestId` on the `guest` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleId` on the `guest` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[guestId]` on the table `ServiceRequest` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[guestId]` on the table `Vehicle` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `guest` DROP FOREIGN KEY `fk_GuestProvidesServiceRequest`;

-- DropForeignKey
ALTER TABLE `guest` DROP FOREIGN KEY `fk_GuestProvidesVehicle`;

-- DropIndex
DROP INDEX `service_request_id` ON `guest`;

-- AlterTable
ALTER TABLE `guest` DROP COLUMN `serviceRequestId`,
    DROP COLUMN `vehicleId`;

-- AlterTable
ALTER TABLE `servicerequest` ADD COLUMN `guestId` BIGINT UNSIGNED NULL;

-- AlterTable
ALTER TABLE `vehicle` ADD COLUMN `guestId` BIGINT UNSIGNED NULL;

-- CreateIndex
CREATE UNIQUE INDEX `ServiceRequest_guestId_key` ON `ServiceRequest`(`guestId`);

-- CreateIndex
CREATE UNIQUE INDEX `Vehicle_guestId_key` ON `Vehicle`(`guestId`);

-- AddForeignKey
ALTER TABLE `ServiceRequest` ADD CONSTRAINT `fk_GuestProvidesServiceRequest` FOREIGN KEY (`guestId`) REFERENCES `Guest`(`guestId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `fk_GuestProvidesVehicle` FOREIGN KEY (`guestId`) REFERENCES `Guest`(`guestId`) ON DELETE SET NULL ON UPDATE CASCADE;
