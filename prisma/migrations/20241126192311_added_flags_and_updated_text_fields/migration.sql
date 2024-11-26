/*
  Warnings:

  - You are about to drop the column `reviewDate` on the `review` table. All the data in the column will be lost.
  - You are about to drop the column `responseDate` on the `reviewresponse` table. All the data in the column will be lost.
  - You are about to drop the column `requestedAt` on the `servicerequest` table. All the data in the column will be lost.
  - You are about to drop the column `reportedEntity` on the `userreport` table. All the data in the column will be lost.
  - The values [CONSIDERED,CLOSED] on the enum `UserReport_status` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `reportedEntityType` to the `UserReport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer` ADD COLUMN `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `createdBy` BIGINT UNSIGNED NULL,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NULL,
    ADD COLUMN `updatedBy` BIGINT UNSIGNED NULL,
    MODIFY `description` TEXT NULL;

-- AlterTable
ALTER TABLE `employee` ADD COLUMN `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `createdBy` BIGINT UNSIGNED NULL,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NULL,
    ADD COLUMN `updatedBy` BIGINT UNSIGNED NULL,
    MODIFY `password` VARCHAR(256) NOT NULL;

-- AlterTable
ALTER TABLE `job` MODIFY `description` TEXT NULL;

-- AlterTable
ALTER TABLE `jobcategory` MODIFY `description` TEXT NULL;

-- AlterTable
ALTER TABLE `joinworkshoprequest` ADD COLUMN `createdBy` BIGINT UNSIGNED NULL,
    ADD COLUMN `resolvedAt` DATETIME(0) NULL,
    ADD COLUMN `updatedBy` BIGINT UNSIGNED NULL,
    MODIFY `message` TEXT NULL;

-- AlterTable
ALTER TABLE `permissionset` ADD COLUMN `updatedAt` TIMESTAMP(0) NULL,
    ADD COLUMN `updatedBy` BIGINT UNSIGNED NULL;

-- AlterTable
ALTER TABLE `review` DROP COLUMN `reviewDate`,
    ADD COLUMN `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `originalRating` DECIMAL(3, 2) NULL,
    ADD COLUMN `originalReviewText` TEXT NULL,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NULL,
    MODIFY `reviewText` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `reviewresponse` DROP COLUMN `responseDate`,
    ADD COLUMN `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `originalResponseText` TEXT NULL,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NULL,
    MODIFY `responseText` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `service` ADD COLUMN `addedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `addedBy` BIGINT UNSIGNED NULL,
    ADD COLUMN `resolvedAt` DATETIME(0) NULL,
    ADD COLUMN `resolvedBy` BIGINT UNSIGNED NULL,
    ADD COLUMN `updatedBy` BIGINT UNSIGNED NULL,
    MODIFY `description` TEXT NULL,
    ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `servicerequest` DROP COLUMN `requestedAt`,
    ADD COLUMN `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `resolvedAt` DATETIME(0) NULL,
    ADD COLUMN `resolvedBy` BIGINT UNSIGNED NULL,
    MODIFY `status` ENUM('PENDING', 'ACCEPTED', 'REJECTED', 'CANCELLED') NULL DEFAULT 'PENDING',
    MODIFY `description` TEXT NULL;

-- AlterTable
ALTER TABLE `task` ADD COLUMN `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `createdBy` BIGINT UNSIGNED NULL,
    ADD COLUMN `resolvedAt` DATETIME(0) NULL,
    ADD COLUMN `resolvedBy` BIGINT UNSIGNED NULL,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NULL,
    ADD COLUMN `updatedBy` BIGINT UNSIGNED NULL,
    MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'SUSPENDED') NULL DEFAULT 'INACTIVE',
    ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `userreport` DROP COLUMN `reportedEntity`,
    ADD COLUMN `reportedEntityType` ENUM('USER', 'WORKSHOP', 'REVIEW', 'REVIEW_RESPONSE', 'SERVICE', 'SERVICE_REQUEST') NOT NULL,
    MODIFY `reportText` TEXT NOT NULL,
    MODIFY `status` ENUM('PENDING', 'ACTIVE', 'CLOSED_CONFIRMED', 'CLOSED_DENIED') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `workshop` ADD COLUMN `updatedBy` BIGINT UNSIGNED NULL,
    ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `workshopdetails` ADD COLUMN `updatedAt` TIMESTAMP(0) NULL,
    ADD COLUMN `updatedBy` BIGINT UNSIGNED NULL,
    MODIFY `description` TEXT NULL,
    MODIFY `logoURL` VARCHAR(256) NULL,
    MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'SUSPENDED') NULL DEFAULT 'ACTIVE',
    MODIFY `NIP` CHAR(10) NULL;

-- AlterTable
ALTER TABLE `workshopjob` ADD COLUMN `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `createdBy` BIGINT UNSIGNED NULL,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NULL,
    ADD COLUMN `updatedBy` BIGINT UNSIGNED NULL,
    MODIFY `workshopJobDescription` TEXT NULL;
