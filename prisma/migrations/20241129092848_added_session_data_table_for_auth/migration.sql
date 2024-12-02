/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Workshop` will be added. If there are existing duplicate values, this will fail.
  - Made the column `email` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `telephoneNumber` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `email` VARCHAR(320) NOT NULL,
    MODIFY `firstName` VARCHAR(30) NULL,
    MODIFY `lastName` VARCHAR(30) NULL,
    MODIFY `telephoneNumber` VARCHAR(12) NOT NULL;

-- CreateTable
CREATE TABLE `SessionData` (
    `sessionDataId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` BIGINT UNSIGNED NOT NULL,
    `refreshTokenHash` VARCHAR(255) NOT NULL,
    `deviceInfo` VARCHAR(255) NULL,
    `ipAddress` VARCHAR(45) NULL,
    `issuedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `expiresAt` TIMESTAMP(0) NOT NULL,
    `revoked` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `SessionData_sessionDataId_key`(`sessionDataId`),
    INDEX `SessionData_userId_idx`(`userId`),
    INDEX `SessionData_refreshTokenHash_idx`(`refreshTokenHash`),
    PRIMARY KEY (`sessionDataId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Workshop_email_key` ON `Workshop`(`email`);

-- AddForeignKey
ALTER TABLE `SessionData` ADD CONSTRAINT `SessionData_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
