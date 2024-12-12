/*
  Warnings:

  - You are about to drop the column `createdAt` on the `workshopdevice` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `workshopdevice` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `workshopdevice` DROP COLUMN `createdAt`,
    DROP COLUMN `createdBy`,
    ADD COLUMN `acceptedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `acceptedBy` BIGINT UNSIGNED NULL,
    ADD COLUMN `lastLoginAt` TIMESTAMP(0) NULL,
    ADD COLUMN `lastLoginBy` BIGINT UNSIGNED NULL,
    ADD COLUMN `updatedBy` BIGINT UNSIGNED NULL;

-- CreateTable
CREATE TABLE `WorkshopDeviceOTP` (
    `workshopDeviceOTPId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `employeeId` BIGINT UNSIGNED NOT NULL,
    `workshopId` BIGINT UNSIGNED NOT NULL,
    `code` CHAR(7) NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `workshop_device_otp_id`(`workshopDeviceOTPId`),
    UNIQUE INDEX `WorkshopDeviceOTP_workshopId_key`(`workshopId`),
    UNIQUE INDEX `WorkshopDeviceOTP_code_key`(`code`),
    INDEX `WorkshopDeviceOTP_code_idx`(`code`),
    INDEX `WorkshopDeviceOTP_workshopId_idx`(`workshopId`),
    PRIMARY KEY (`workshopDeviceOTPId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `WorkshopDeviceOTP` ADD CONSTRAINT `fk_workshopHasDeviceOTP` FOREIGN KEY (`workshopId`) REFERENCES `Workshop`(`workshopId`) ON DELETE NO ACTION ON UPDATE CASCADE;
