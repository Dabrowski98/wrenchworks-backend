/*
  Warnings:

  - The primary key for the `employee` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `employeetask` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[employeeId]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[login,workshopId]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `login` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `fk_personIsEmployee`;

-- DropForeignKey
ALTER TABLE `employeetask` DROP FOREIGN KEY `fk_tasks_employees_employeeCanBeAssignedToManyTasks`;

-- DropForeignKey
ALTER TABLE `employeetask` DROP FOREIGN KEY `fk_tasks_employees_taskCanBeAssignedToManyEmployees`;

-- DropForeignKey
ALTER TABLE `service` DROP FOREIGN KEY `fk_employeeResponsibleForService`;

-- AlterTable
ALTER TABLE `employee` DROP PRIMARY KEY,
    ADD COLUMN `login` VARCHAR(30) NOT NULL,
    ADD COLUMN `password` VARCHAR(255) NOT NULL,
    ADD COLUMN `personId` BIGINT UNSIGNED NULL,
    MODIFY `employeeId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`employeeId`);

-- DropTable
DROP TABLE `employeetask`;

-- CreateTable
CREATE TABLE `_EmployeeToTask` (
    `A` BIGINT UNSIGNED NOT NULL,
    `B` BIGINT UNSIGNED NOT NULL,

    UNIQUE INDEX `_EmployeeToTask_AB_unique`(`A`, `B`),
    INDEX `_EmployeeToTask_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `employee_id` ON `Employee`(`employeeId`);

-- CreateIndex
CREATE UNIQUE INDEX `Employee_login_workshopId_key` ON `Employee`(`login`, `workshopId`);

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `fk_personCanBeEmployee` FOREIGN KEY (`personId`) REFERENCES `Person`(`personId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `fk_employeeResponsibleForService` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`employeeId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EmployeeToTask` ADD CONSTRAINT `_EmployeeToTask_A_fkey` FOREIGN KEY (`A`) REFERENCES `Employee`(`employeeId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EmployeeToTask` ADD CONSTRAINT `_EmployeeToTask_B_fkey` FOREIGN KEY (`B`) REFERENCES `Task`(`taskId`) ON DELETE CASCADE ON UPDATE CASCADE;
