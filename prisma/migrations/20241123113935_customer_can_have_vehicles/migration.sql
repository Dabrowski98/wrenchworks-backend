/*
  Warnings:

  - The primary key for the `customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `telephoneNumber` on the `workshopdetails` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[customerId]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `telephoneNumber` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephoneNumber` to the `Workshop` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `workshop` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `customer` DROP FOREIGN KEY `fk_customerIsPerson`;

-- DropForeignKey
ALTER TABLE `service` DROP FOREIGN KEY `fk_customerOrdersService`;

-- DropIndex
DROP INDEX `fk_employeeResponsibleForService` ON `service`;

-- AlterTable
ALTER TABLE `customer` DROP PRIMARY KEY,
    ADD COLUMN `personId` BIGINT UNSIGNED NULL,
    ADD COLUMN `telephoneNumber` VARCHAR(12) NOT NULL,
    ADD COLUMN `telephoneNumberConfirmed` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `customerId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`customerId`);

-- AlterTable
ALTER TABLE `workshop` ADD COLUMN `isOfferingService` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `telephoneNumber` VARCHAR(12) NOT NULL,
    MODIFY `email` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `workshopdetails` DROP COLUMN `telephoneNumber`;

-- CreateTable
CREATE TABLE `_CustomerToVehicle` (
    `A` BIGINT UNSIGNED NOT NULL,
    `B` BIGINT UNSIGNED NOT NULL,

    UNIQUE INDEX `_CustomerToVehicle_AB_unique`(`A`, `B`),
    INDEX `_CustomerToVehicle_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `customer_id` ON `Customer`(`customerId`);

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `fk_customerCanBePerson` FOREIGN KEY (`personId`) REFERENCES `Person`(`personId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `fk_customerOrdersService` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`customerId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CustomerToVehicle` ADD CONSTRAINT `_CustomerToVehicle_A_fkey` FOREIGN KEY (`A`) REFERENCES `Customer`(`customerId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CustomerToVehicle` ADD CONSTRAINT `_CustomerToVehicle_B_fkey` FOREIGN KEY (`B`) REFERENCES `Vehicle`(`vehicleId`) ON DELETE CASCADE ON UPDATE CASCADE;
