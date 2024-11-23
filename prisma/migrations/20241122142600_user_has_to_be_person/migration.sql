/*
  Warnings:

  - Made the column `personId` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `fk_userCanBePerson`;

-- AlterTable
ALTER TABLE `permissionset` ALTER COLUMN `setName` DROP DEFAULT;

-- AlterTable
ALTER TABLE `task` MODIFY `executionTime` FLOAT NOT NULL DEFAULT 0.00;

-- AlterTable
ALTER TABLE `user` MODIFY `personId` BIGINT UNSIGNED NOT NULL,
    MODIFY `isVerified` BOOLEAN NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `fk_userHasToBePerson` FOREIGN KEY (`personId`) REFERENCES `Person`(`personId`) ON DELETE NO ACTION ON UPDATE CASCADE;
