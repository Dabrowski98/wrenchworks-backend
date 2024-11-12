/*
  Warnings:

  - You are about to alter the column `permissionSetId` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `UnsignedInt`.
  - The primary key for the `permissionset` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `permissionSetId` on the `permissionset` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `UnsignedInt`.
  - You are about to alter the column `fuelType` on the `vehicledetails` table. The data in that column could be lost. The data in that column will be cast from `VarChar(16)` to `Enum(EnumId(8))`.
  - You are about to alter the column `bodyColor` on the `vehicledetails` table. The data in that column could be lost. The data in that column will be cast from `VarChar(16)` to `Enum(EnumId(9))`.
  - You are about to drop the column `price` on the `workshopjob` table. All the data in the column will be lost.
  - You are about to drop the column `workshopDescription` on the `workshopjob` table. All the data in the column will be lost.
  - You are about to drop the `_addressworkshops` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_addressworkshops` DROP FOREIGN KEY `_AddressWorkshops_A_fkey`;

-- DropForeignKey
ALTER TABLE `_addressworkshops` DROP FOREIGN KEY `_AddressWorkshops_B_fkey`;

-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `fk_employeeCanHavePermissionSetAssigned`;

-- AlterTable
ALTER TABLE `customer` MODIFY `description` VARCHAR(5000) NULL;

-- AlterTable
ALTER TABLE `employee` MODIFY `permissionSetId` INTEGER UNSIGNED NULL;

-- AlterTable
ALTER TABLE `job` MODIFY `description` VARCHAR(500) NULL;

-- AlterTable
ALTER TABLE `jobcategory` MODIFY `description` VARCHAR(500) NULL;

-- AlterTable
ALTER TABLE `permissionset` DROP PRIMARY KEY,
    MODIFY `permissionSetId` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`permissionSetId`);

-- AlterTable
ALTER TABLE `review` MODIFY `reviewText` VARCHAR(10000) NOT NULL;

-- AlterTable
ALTER TABLE `reviewresponse` MODIFY `responseText` VARCHAR(5000) NOT NULL;

-- AlterTable
ALTER TABLE `service` MODIFY `description` VARCHAR(5000) NULL;

-- AlterTable
ALTER TABLE `servicerequest` MODIFY `description` VARCHAR(5000) NULL;

-- AlterTable
ALTER TABLE `task` MODIFY `description` VARCHAR(2500) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `avatarURL` VARCHAR(255) NULL,
    MODIFY `email` VARCHAR(320) NULL;

-- AlterTable
ALTER TABLE `userreport` MODIFY `reportText` VARCHAR(2500) NOT NULL;

-- AlterTable
ALTER TABLE `vehicledetails` ADD COLUMN `countryOfRegistration` VARCHAR(2) NULL,
    MODIFY `fuelType` ENUM('petrol', 'diesel', 'electric', 'hybrid', 'rocket', 'LPG', 'CNG', 'other') NULL,
    MODIFY `bodyColor` ENUM('black', 'white', 'red', 'blue', 'silver', 'gray', 'green', 'yellow', 'brown', 'other') NULL;

-- AlterTable
ALTER TABLE `workshop` ADD COLUMN `addressId` BIGINT UNSIGNED NULL;

-- AlterTable
ALTER TABLE `workshopdetails` MODIFY `rating` DECIMAL(3, 2) NULL DEFAULT 0.00,
    MODIFY `description` VARCHAR(10000) NULL;

-- AlterTable
ALTER TABLE `workshopjob` DROP COLUMN `price`,
    DROP COLUMN `workshopDescription`,
    ADD COLUMN `workshopJobDescription` VARCHAR(500) NULL;

-- DropTable
DROP TABLE `_addressworkshops`;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `fk_employeeCanHavePermissionSetAssigned` FOREIGN KEY (`permissionSetId`) REFERENCES `PermissionSet`(`permissionSetId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Workshop` ADD CONSTRAINT `fk_workshopHasAddress` FOREIGN KEY (`addressId`) REFERENCES `Address`(`addressId`) ON DELETE NO ACTION ON UPDATE CASCADE;
