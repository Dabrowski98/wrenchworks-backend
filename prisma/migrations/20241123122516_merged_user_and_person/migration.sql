/*
  Warnings:

  - You are about to drop the column `personId` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `personId` on the `employee` table. All the data in the column will be lost.
  - You are about to drop the column `personId` on the `servicerequest` table. All the data in the column will be lost.
  - You are about to drop the column `personId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `personId` on the `vehicle` table. All the data in the column will be lost.
  - You are about to drop the column `personId` on the `workshop` table. All the data in the column will be lost.
  - You are about to drop the `person` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[addressId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `ServiceRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Workshop` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `customer` DROP FOREIGN KEY `fk_customerCanBePerson`;

-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `fk_personCanBeEmployee`;

-- DropForeignKey
ALTER TABLE `person` DROP FOREIGN KEY `Person_addressId_fkey`;

-- DropForeignKey
ALTER TABLE `servicerequest` DROP FOREIGN KEY `fk_requestFromPerson`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `fk_userHasToBePerson`;

-- DropForeignKey
ALTER TABLE `vehicle` DROP FOREIGN KEY `fk_vehicleHasOwner`;

-- DropForeignKey
ALTER TABLE `workshop` DROP FOREIGN KEY `fk_workshopHasOwner`;

-- DropIndex
DROP INDEX `fk_customerOrdersService` ON `service`;

-- DropIndex
DROP INDEX `person_id` ON `user`;

-- DropIndex
DROP INDEX `uniqueUsername` ON `user`;

-- AlterTable
ALTER TABLE `customer` DROP COLUMN `personId`,
    ADD COLUMN `userId` BIGINT UNSIGNED NULL;

-- AlterTable
ALTER TABLE `employee` DROP COLUMN `personId`,
    ADD COLUMN `nickname` VARCHAR(30) NULL,
    ADD COLUMN `userId` BIGINT UNSIGNED NULL;

-- AlterTable
ALTER TABLE `servicerequest` DROP COLUMN `personId`,
    ADD COLUMN `userId` BIGINT UNSIGNED NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `personId`,
    ADD COLUMN `addressId` BIGINT UNSIGNED NULL,
    ADD COLUMN `firstName` VARCHAR(30) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(30) NOT NULL,
    ADD COLUMN `telephoneNumber` VARCHAR(12) NULL;

-- AlterTable
ALTER TABLE `vehicle` DROP COLUMN `personId`,
    ADD COLUMN `userId` BIGINT UNSIGNED NOT NULL;

-- AlterTable
ALTER TABLE `workshop` DROP COLUMN `personId`,
    ADD COLUMN `ownerId` BIGINT UNSIGNED NOT NULL;

-- DropTable
DROP TABLE `person`;

-- CreateIndex
CREATE INDEX `ServiceRequest_userId_idx` ON `ServiceRequest`(`userId`);

-- CreateIndex
CREATE UNIQUE INDEX `User_addressId_key` ON `User`(`addressId`);

-- CreateIndex
CREATE INDEX `Vehicle_userId_idx` ON `Vehicle`(`userId`);

-- CreateIndex
CREATE INDEX `Workshop_ownerId_idx` ON `Workshop`(`ownerId`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Address`(`addressId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `fk_customerCanBeUser` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `fk_userCanBeEmployee` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceRequest` ADD CONSTRAINT `fk_requestFromUser` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `fk_vehicleHasOwner` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Workshop` ADD CONSTRAINT `fk_workshopHasOwner` FOREIGN KEY (`ownerId`) REFERENCES `User`(`userId`) ON DELETE NO ACTION ON UPDATE CASCADE;
