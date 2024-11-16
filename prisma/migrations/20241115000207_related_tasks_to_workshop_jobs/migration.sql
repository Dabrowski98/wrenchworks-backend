/*
  Warnings:

  - You are about to drop the column `jobId` on the `task` table. All the data in the column will be lost.
  - Added the required column `workshopJobId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `task` DROP COLUMN `jobId`,
    ADD COLUMN `workshopJobId` BIGINT UNSIGNED NOT NULL;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_workshopJobId_fkey` FOREIGN KEY (`workshopJobId`) REFERENCES `WorkshopJob`(`workshopJobId`) ON DELETE NO ACTION ON UPDATE CASCADE;
