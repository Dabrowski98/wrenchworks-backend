/*
  Warnings:

  - You are about to drop the column `permissionSetId` on the `employee` table. All the data in the column will be lost.
  - You are about to drop the `permissionset` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `fk_employeeCanHavePermissionSetAssigned`;

-- DropForeignKey
ALTER TABLE `permissionset` DROP FOREIGN KEY `fk_permissionSetForCertainWorkshop`;

-- AlterTable
ALTER TABLE `customer` MODIFY `updatedAt` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `employee` DROP COLUMN `permissionSetId`,
    MODIFY `updatedAt` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `joinworkshoprequest` MODIFY `updatedAt` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `review` MODIFY `updatedAt` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `reviewresponse` MODIFY `updatedAt` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `service` MODIFY `updatedAt` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `task` MODIFY `updatedAt` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `updatedAt` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `userreport` MODIFY `updatedAt` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `vehiclebrand` MODIFY `updatedAt` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `vehiclemodel` MODIFY `updatedAt` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `workshop` MODIFY `updatedAt` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `workshopdetails` MODIFY `updatedAt` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `workshopjob` MODIFY `updatedAt` TIMESTAMP(0) NULL;

-- DropTable
DROP TABLE `permissionset`;

-- CreateTable
CREATE TABLE `WorkshopDevice` (
    `workshopDeviceId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `workshopId` BIGINT UNSIGNED NOT NULL,
    `serialNumber` VARCHAR(255) NOT NULL,
    `deviceName` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL,
    `createdBy` BIGINT UNSIGNED NOT NULL,

    UNIQUE INDEX `workshop_device_id`(`workshopDeviceId`),
    INDEX `WorkshopDevice_workshopId_idx`(`workshopId`),
    UNIQUE INDEX `WorkshopDevice_workshopId_serialNumber_key`(`workshopId`, `serialNumber`),
    PRIMARY KEY (`workshopDeviceId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `WorkshopDevice` ADD CONSTRAINT `fk_workshopHasDevice` FOREIGN KEY (`workshopId`) REFERENCES `Workshop`(`workshopId`) ON DELETE NO ACTION ON UPDATE CASCADE;
