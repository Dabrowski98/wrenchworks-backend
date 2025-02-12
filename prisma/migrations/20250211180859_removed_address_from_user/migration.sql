/*
  Warnings:

  - You are about to drop the column `addressId` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_addressId_fkey`;

-- DropIndex
DROP INDEX `User_addressId_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `addressId`;
