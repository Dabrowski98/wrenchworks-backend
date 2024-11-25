/*
  Warnings:

  - You are about to drop the column `telephoneNumberConfirmed` on the `customer` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `review` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(7))` to `Enum(EnumId(3))`.
  - You are about to alter the column `status` on the `reviewresponse` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(8))` to `Enum(EnumId(4))`.
  - You are about to alter the column `status` on the `service` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(9))` to `Enum(EnumId(7))`.
  - You are about to alter the column `status` on the `servicerequest` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `Enum(EnumId(5))`.
  - You are about to alter the column `status` on the `task` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(2))` to `Enum(EnumId(6))`.
  - You are about to alter the column `status` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(3))` to `Enum(EnumId(0))`.
  - The values [user,workshop,review,review_response] on the enum `UserReport_reportedType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to alter the column `status` on the `userreport` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(4))` to `Enum(EnumId(9))`.
  - The values [petrol,diesel,electric,hybrid,rocket,other] on the enum `VehicleDetails_fuelType` will be removed. If these variants are still used in the database, this will fail.
  - The values [black,white,red,blue,silver,gray,green,yellow,brown,other] on the enum `VehicleDetails_bodyColor` will be removed. If these variants are still used in the database, this will fail.
  - You are about to alter the column `status` on the `workshopdetails` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(6))` to `Enum(EnumId(12))`.
  - A unique constraint covering the columns `[guestId]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `creationSource` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `vehicle` DROP FOREIGN KEY `fk_vehicleHasOwner`;

-- AlterTable
ALTER TABLE `customer` DROP COLUMN `telephoneNumberConfirmed`,
    ADD COLUMN `creationSource` ENUM('GUEST', 'WORKSHOP', 'USER') NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `guestId` BIGINT UNSIGNED NULL,
    ADD COLUMN `isVerified` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `telephoneNumber` VARCHAR(12) NULL;

-- AlterTable
ALTER TABLE `review` MODIFY `status` ENUM('PENDING', 'ACCEPTED', 'DENIED') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `reviewresponse` MODIFY `status` ENUM('PENDING', 'ACCEPTED', 'DENIED') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `service` MODIFY `status` ENUM('PENDING', 'COMPLETED', 'CANCELLED') NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `servicerequest` MODIFY `status` ENUM('PENDING', 'ACCEPTED', 'REJECTED') NULL DEFAULT 'PENDING',
    MODIFY `userId` BIGINT UNSIGNED NULL;

-- AlterTable
ALTER TABLE `task` MODIFY `status` ENUM('PENDING', 'COMPLETED', 'CANCELLED') NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `user` MODIFY `status` ENUM('ACTIVE', 'SUSPENDED') NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `userreport` MODIFY `reportedType` ENUM('USER', 'WORKSHOP', 'REVIEW', 'REVIEW_RESPONSE') NOT NULL,
    MODIFY `status` ENUM('PENDING', 'CONSIDERED', 'CLOSED') NOT NULL DEFAULT 'PENDING',
    MODIFY `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `vehicle` MODIFY `userId` BIGINT UNSIGNED NULL;

-- AlterTable
ALTER TABLE `vehicledetails` MODIFY `fuelType` ENUM('PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID', 'ROCKET', 'LPG', 'CNG', 'OTHER') NULL,
    MODIFY `bodyColor` ENUM('BLACK', 'WHITE', 'RED', 'BLUE', 'SILVER', 'GRAY', 'GREEN', 'YELLOW', 'BROWN', 'OTHER') NULL;

-- AlterTable
ALTER TABLE `workshopdetails` MODIFY `status` ENUM('ACTIVE', 'SUSPENDED') NULL DEFAULT 'ACTIVE';

-- CreateTable
CREATE TABLE `Guest` (
    `guestId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `vehicleId` BIGINT UNSIGNED NULL,
    `serviceRequestId` BIGINT UNSIGNED NULL,
    `firstName` VARCHAR(30) NOT NULL,
    `telephoneNumber` VARCHAR(12) NULL,
    `email` VARCHAR(191) NULL,
    `NIP` VARCHAR(10) NULL,
    `companyName` VARCHAR(30) NULL,

    UNIQUE INDEX `guest_id`(`guestId`),
    UNIQUE INDEX `service_request_id`(`serviceRequestId`),
    PRIMARY KEY (`guestId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JoinWorkshopRequest` (
    `joinWorkshopRequestId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `receiverId` BIGINT UNSIGNED NOT NULL,
    `workshopId` BIGINT UNSIGNED NOT NULL,
    `message` VARCHAR(1000) NULL,
    `status` ENUM('PENDING', 'ACCEPTED', 'DENIED') NOT NULL DEFAULT 'PENDING',
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL,

    UNIQUE INDEX `join_workshop_request_id`(`joinWorkshopRequestId`),
    PRIMARY KEY (`joinWorkshopRequestId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Customer_guestId_key` ON `Customer`(`guestId`);

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `fk_GuestCanBecomeCustomer` FOREIGN KEY (`guestId`) REFERENCES `Guest`(`guestId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Guest` ADD CONSTRAINT `fk_GuestProvidesVehicle` FOREIGN KEY (`vehicleId`) REFERENCES `Vehicle`(`vehicleId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Guest` ADD CONSTRAINT `fk_GuestProvidesServiceRequest` FOREIGN KEY (`serviceRequestId`) REFERENCES `ServiceRequest`(`serviceRequestId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JoinWorkshopRequest` ADD CONSTRAINT `fk_userCanRequestToJoinWorkshop` FOREIGN KEY (`receiverId`) REFERENCES `User`(`userId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JoinWorkshopRequest` ADD CONSTRAINT `fk_workshopCanHaveJoinRequests` FOREIGN KEY (`workshopId`) REFERENCES `Workshop`(`workshopId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `fk_vehicleCanBeOwnedByUser` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE NO ACTION ON UPDATE CASCADE;
