/*
  Warnings:

  - You are about to drop the column `refreshTokenHash` on the `sessiondata` table. All the data in the column will be lost.
  - Made the column `createdAt` on table `customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `employee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `employee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `joinworkshoprequest` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `joinworkshoprequest` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `permissionset` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `review` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `review` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `reviewresponse` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `reviewresponse` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `service` required. This step will fail if there are existing NULL values in that column.
  - Made the column `addedAt` on table `service` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `servicerequest` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `refreshToken` to the `SessionData` table without a default value. This is not possible if the table is not empty.
  - Made the column `createdAt` on table `task` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `task` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `userreport` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `userreport` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `vehiclebrand` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `vehiclebrand` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `vehiclemodel` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `vehiclemodel` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `workshop` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `workshop` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `workshopdetails` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `workshopjob` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `workshopjob` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `SessionData_refreshTokenHash_idx` ON `sessiondata`;

-- AlterTable
ALTER TABLE `customer` MODIFY `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updatedAt` TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE `employee` MODIFY `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updatedAt` TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE `joinworkshoprequest` MODIFY `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updatedAt` TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE `permissionset` MODIFY `updatedAt` TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE `review` MODIFY `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updatedAt` TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE `reviewresponse` MODIFY `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updatedAt` TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE `service` MODIFY `updatedAt` TIMESTAMP(0) NOT NULL,
    MODIFY `addedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `servicerequest` MODIFY `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `sessiondata` DROP COLUMN `refreshTokenHash`,
    ADD COLUMN `refreshToken` VARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE `task` MODIFY `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updatedAt` TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updatedAt` TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE `userreport` MODIFY `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updatedAt` TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE `vehiclebrand` MODIFY `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updatedAt` TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE `vehiclemodel` MODIFY `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updatedAt` TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE `workshop` MODIFY `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updatedAt` TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE `workshopdetails` MODIFY `updatedAt` TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE `workshopjob` MODIFY `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updatedAt` TIMESTAMP(0) NOT NULL;