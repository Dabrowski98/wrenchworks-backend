-- AlterTable
ALTER TABLE `employee` ADD COLUMN `refreshToken` VARCHAR(256) NULL;

-- AlterTable
ALTER TABLE `sessiondata` MODIFY `refreshToken` VARCHAR(1000) NULL;

ALTER TABLE `employee` MODIFY `password` VARCHAR(255) NOT NULL,
    MODIFY `refreshToken` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `sessiondata` MODIFY `refreshToken` VARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE `workshopdetails` MODIFY `logoURL` VARCHAR(255) NULL;

CREATE UNIQUE INDEX `User_username_key` ON `User`(`username`);

ALTER TABLE `workshop` ADD COLUMN `password` VARCHAR(255) NOT NULL;
