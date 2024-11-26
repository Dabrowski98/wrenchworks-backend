/*
  Warnings:

  - You are about to drop the column `reportedType` on the `userreport` table. All the data in the column will be lost.
  - Added the required column `employeeId` to the `JoinWorkshopRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reportType` to the `UserReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reportedEntity` to the `UserReport` table without a default value. This is not possible if the table is not empty.
  - Made the column `vehicleId` on table `vehicledetails` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `vehicledetails` DROP FOREIGN KEY `fk_vehicleHasDetails`;

-- AlterTable
ALTER TABLE `customer` ADD COLUMN `firstName` VARCHAR(30) NULL,
    MODIFY `email` VARCHAR(320) NULL;

-- AlterTable
ALTER TABLE `guest` MODIFY `email` VARCHAR(320) NULL;

-- AlterTable
ALTER TABLE `joinworkshoprequest` ADD COLUMN `employeeId` BIGINT UNSIGNED NOT NULL;

-- AlterTable
ALTER TABLE `userreport` DROP COLUMN `reportedType`,
    ADD COLUMN `reportType` ENUM('OFFENSIVE_CONTENT', 'HARRASMENT', 'SPAM', 'FAKE_PROFILE', 'PRIVACY_VIOLATION', 'FAKE_WORKSHOP', 'VIOLATION_OF_TERMS', 'FRAUDULENT_ACTIVITY', 'WORKSHOP_IMPERSONATION', 'OTHER') NOT NULL,
    ADD COLUMN `reportedEntity` ENUM('USER', 'WORKSHOP', 'REVIEW', 'REVIEW_RESPONSE', 'SERVICE', 'SERVICE_REQUEST') NOT NULL;

-- AlterTable
ALTER TABLE `vehicledetails` MODIFY `vehicleId` BIGINT UNSIGNED NOT NULL;

-- AlterTable
ALTER TABLE `workshop` MODIFY `email` VARCHAR(320) NOT NULL;

-- AddForeignKey
ALTER TABLE `JoinWorkshopRequest` ADD CONSTRAINT `fk_employeeCanRespondToJoinRequest` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`employeeId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleDetails` ADD CONSTRAINT `fk_vehicleHasDetails` FOREIGN KEY (`vehicleId`) REFERENCES `Vehicle`(`vehicleId`) ON DELETE NO ACTION ON UPDATE CASCADE;
