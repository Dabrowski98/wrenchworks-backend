/*
  Warnings:

  - Added the required column `deviceId` to the `SessionData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sessiondata` ADD COLUMN `deviceId` VARCHAR(255) NOT NULL,
    ADD COLUMN `deviceName` VARCHAR(255) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `SessionData_userId_deviceId_key` ON `SessionData`(`userId`, `deviceId`);
