-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` ENUM('USER', 'ADMIN') NULL DEFAULT 'USER';

-- AlterTable
ALTER TABLE `sessiondata` DROP COLUMN `revoked`;

-- CreateIndex
CREATE UNIQUE INDEX `SessionData_userId_deviceId_key` ON `SessionData`(`userId`, `deviceId`);
