/*
  Warnings:

  - Added the required column `status` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employee` ADD COLUMN `status` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `joinworkshoprequest` MODIFY `status` ENUM('PENDING', 'ACCEPTED', 'REJECTED') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `review` MODIFY `status` ENUM('PENDING', 'ACCEPTED', 'REJECTED') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `reviewresponse` MODIFY `status` ENUM('PENDING', 'ACCEPTED', 'REJECTED') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `userreport` MODIFY `status` ENUM('PENDING', 'ACTIVE', 'CLOSED_CONFIRMED', 'CLOSED_REJECTED') NOT NULL DEFAULT 'PENDING';
