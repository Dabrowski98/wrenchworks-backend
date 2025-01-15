/*
  Warnings:

  - The primary key for the `workshopdeviceotp` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `workshopDeviceOTPId` on the `workshopdeviceotp` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[WorkshopDeviceOtpId]` on the table `WorkshopDeviceOtp` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `WorkshopDeviceOtpId` to the `WorkshopDeviceOtp` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `workshop_device_otp_id` ON `workshopdeviceotp`;

-- AlterTable
ALTER TABLE `workshopdeviceotp` DROP PRIMARY KEY,
    DROP COLUMN `workshopDeviceOTPId`,
    ADD COLUMN `WorkshopDeviceOtpId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`WorkshopDeviceOtpId`);

-- CreateIndex
CREATE UNIQUE INDEX `workshop_device_otp_id` ON `WorkshopDeviceOtp`(`WorkshopDeviceOtpId`);

-- RenameIndex
ALTER TABLE `workshopdeviceotp` RENAME INDEX `WorkshopDeviceOTP_code_idx` TO `WorkshopDeviceOtp_code_idx`;

-- RenameIndex
ALTER TABLE `workshopdeviceotp` RENAME INDEX `WorkshopDeviceOTP_code_key` TO `WorkshopDeviceOtp_code_key`;

-- RenameIndex
ALTER TABLE `workshopdeviceotp` RENAME INDEX `WorkshopDeviceOTP_workshopId_idx` TO `WorkshopDeviceOtp_workshopId_idx`;

-- RenameIndex
ALTER TABLE `workshopdeviceotp` RENAME INDEX `WorkshopDeviceOTP_workshopId_key` TO `WorkshopDeviceOtp_workshopId_key`;

-- AlterTable
ALTER TABLE `workshopdevice` ADD COLUMN `status` ENUM('ACTIVE', 'INACTIVE', 'DISABLED') NULL DEFAULT 'ACTIVE';
