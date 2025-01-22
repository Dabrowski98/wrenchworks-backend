/*
  Warnings:

  - A unique constraint covering the columns `[userId,workshopId]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Customer_userId_workshopId_key` ON `Customer`(`userId`, `workshopId`);

-- AlterTable
ALTER TABLE `service` ADD COLUMN `serviceDescription` TEXT NULL;

-- DropForeignKey
ALTER TABLE `workshopdeviceotp` DROP FOREIGN KEY `fk_workshopHasDeviceOTP`;

-- AlterTable
ALTER TABLE `employee` MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'SUSPENDED') NOT NULL DEFAULT 'INACTIVE';

-- AlterTable
ALTER TABLE `review` MODIFY `status` ENUM('PENDING', 'ACCEPTED', 'REJECTED', 'HIDDEN') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `userreport` ADD COLUMN `updatedBy` BIGINT UNSIGNED NULL,
    MODIFY `status` ENUM('PENDING', 'ACTIVE', 'CLOSED') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `workshopdetails` MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'SUSPENDED') NULL DEFAULT 'INACTIVE';

-- AlterTable
ALTER TABLE `workshopdevice` MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'DISABLED') NULL DEFAULT 'INACTIVE';

-- AddForeignKey
ALTER TABLE `WorkshopDeviceOtp` ADD CONSTRAINT `fk_workshopHasDeviceOtp` FOREIGN KEY (`workshopId`) REFERENCES `Workshop`(`workshopId`) ON DELETE NO ACTION ON UPDATE CASCADE;
