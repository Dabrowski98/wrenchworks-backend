/*
  Warnings:

  - The primary key for the `vehicledetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `addressperson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `addressworkshop` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `servicerequestjob` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `servicetask` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `workshopjobcategory` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[vehicleDetailsId]` on the table `VehicleDetails` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[vehicleId]` on the table `VehicleDetails` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `vehicleDetailsId` to the `VehicleDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `addressperson` DROP FOREIGN KEY `fk_addresses_persons_address_id`;

-- DropForeignKey
ALTER TABLE `addressperson` DROP FOREIGN KEY `fk_addresses_persons_person_id`;

-- DropForeignKey
ALTER TABLE `addressworkshop` DROP FOREIGN KEY `fk_addresses_workshops_address_id`;

-- DropForeignKey
ALTER TABLE `addressworkshop` DROP FOREIGN KEY `fk_addresses_workshops_workshop_id`;

-- DropForeignKey
ALTER TABLE `employeetask` DROP FOREIGN KEY `fk_tasks_employees_taskCanBeAssignedToManyEmployees`;

-- DropForeignKey
ALTER TABLE `servicerequestjob` DROP FOREIGN KEY `fk_jobsAssignedToServiceRequest`;

-- DropForeignKey
ALTER TABLE `servicerequestjob` DROP FOREIGN KEY `fk_serviceRequestHasJobs`;

-- DropForeignKey
ALTER TABLE `servicetask` DROP FOREIGN KEY `fk_taskIsAPartOfService`;

-- DropForeignKey
ALTER TABLE `vehicledetails` DROP FOREIGN KEY `fk_vehicleHasDetails`;

-- DropForeignKey
ALTER TABLE `workshopjobcategory` DROP FOREIGN KEY `fk_categoryHandledByWorkshop`;

-- DropForeignKey
ALTER TABLE `workshopjobcategory` DROP FOREIGN KEY `fk_workshopOfferJobsFromCategory`;

-- DropIndex
DROP INDEX `Customer_customerId_workshopId_key` ON `customer`;

-- DropIndex
DROP INDEX `Employee_employeeId_workshopId_key` ON `employee`;

-- DropIndex
DROP INDEX `uniqueUsername` ON `user`;

-- AlterTable
ALTER TABLE `employeetask` ADD COLUMN `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `vehicledetails` DROP PRIMARY KEY,
    ADD COLUMN `vehicleDetailsId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `vehicleId` BIGINT UNSIGNED NULL,
    ADD PRIMARY KEY (`vehicleDetailsId`);

-- DropTable
DROP TABLE `addressperson`;

-- DropTable
DROP TABLE `addressworkshop`;

-- DropTable
DROP TABLE `servicerequestjob`;

-- DropTable
DROP TABLE `servicetask`;

-- DropTable
DROP TABLE `workshopjobcategory`;

-- CreateTable
CREATE TABLE `Task` (
    `taskId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `serviceId` BIGINT UNSIGNED NOT NULL,
    `jobId` BIGINT UNSIGNED NULL,
    `customName` VARCHAR(50) NULL,
    `description` VARCHAR(255) NOT NULL,
    `status` ENUM('pending', 'completed', 'cancelled') NULL DEFAULT 'pending',
    `executionTime` FLOAT NOT NULL,
    `partsCost` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,

    UNIQUE INDEX `task_id`(`taskId`),
    INDEX `Task_serviceId_idx`(`serviceId`),
    PRIMARY KEY (`taskId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AddressPersons` (
    `A` BIGINT UNSIGNED NOT NULL,
    `B` BIGINT UNSIGNED NOT NULL,

    UNIQUE INDEX `_AddressPersons_AB_unique`(`A`, `B`),
    INDEX `_AddressPersons_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AddressWorkshops` (
    `A` BIGINT UNSIGNED NOT NULL,
    `B` BIGINT UNSIGNED NOT NULL,

    UNIQUE INDEX `_AddressWorkshops_AB_unique`(`A`, `B`),
    INDEX `_AddressWorkshops_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_JobCategoryToWorkshop` (
    `A` BIGINT UNSIGNED NOT NULL,
    `B` BIGINT UNSIGNED NOT NULL,

    UNIQUE INDEX `_JobCategoryToWorkshop_AB_unique`(`A`, `B`),
    INDEX `_JobCategoryToWorkshop_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_JobToServiceRequest` (
    `A` BIGINT UNSIGNED NOT NULL,
    `B` BIGINT UNSIGNED NOT NULL,

    UNIQUE INDEX `_JobToServiceRequest_AB_unique`(`A`, `B`),
    INDEX `_JobToServiceRequest_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `uniqueUsername` ON `User`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `vehicle_details_id` ON `VehicleDetails`(`vehicleDetailsId`);

-- CreateIndex
CREATE UNIQUE INDEX `VehicleDetails_vehicleId_key` ON `VehicleDetails`(`vehicleId`);

-- CreateIndex
CREATE INDEX `VehicleDetails_vehicleId_idx` ON `VehicleDetails`(`vehicleId`);

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `fk_taskIsAPartOfService` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`serviceId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmployeeTask` ADD CONSTRAINT `fk_tasks_employees_taskCanBeAssignedToManyEmployees` FOREIGN KEY (`taskId`) REFERENCES `Task`(`taskId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AddressPersons` ADD CONSTRAINT `_AddressPersons_A_fkey` FOREIGN KEY (`A`) REFERENCES `Address`(`addressId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AddressPersons` ADD CONSTRAINT `_AddressPersons_B_fkey` FOREIGN KEY (`B`) REFERENCES `Person`(`personId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AddressWorkshops` ADD CONSTRAINT `_AddressWorkshops_A_fkey` FOREIGN KEY (`A`) REFERENCES `Address`(`addressId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AddressWorkshops` ADD CONSTRAINT `_AddressWorkshops_B_fkey` FOREIGN KEY (`B`) REFERENCES `Workshop`(`workshopId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_JobCategoryToWorkshop` ADD CONSTRAINT `_JobCategoryToWorkshop_A_fkey` FOREIGN KEY (`A`) REFERENCES `JobCategory`(`categoryId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_JobCategoryToWorkshop` ADD CONSTRAINT `_JobCategoryToWorkshop_B_fkey` FOREIGN KEY (`B`) REFERENCES `Workshop`(`workshopId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_JobToServiceRequest` ADD CONSTRAINT `_JobToServiceRequest_A_fkey` FOREIGN KEY (`A`) REFERENCES `Job`(`jobId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_JobToServiceRequest` ADD CONSTRAINT `_JobToServiceRequest_B_fkey` FOREIGN KEY (`B`) REFERENCES `ServiceRequest`(`serviceRequestId`) ON DELETE CASCADE ON UPDATE CASCADE;
