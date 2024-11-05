/*
  Warnings:

  - You are about to drop the `_addresspersons` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `addressId` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_addresspersons` DROP FOREIGN KEY `_AddressPersons_A_fkey`;

-- DropForeignKey
ALTER TABLE `_addresspersons` DROP FOREIGN KEY `_AddressPersons_B_fkey`;

-- AlterTable
ALTER TABLE `person` ADD COLUMN `addressId` BIGINT UNSIGNED NOT NULL;

-- DropTable
DROP TABLE `_addresspersons`;

-- AddForeignKey
ALTER TABLE `Person` ADD CONSTRAINT `Person_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Address`(`addressId`) ON DELETE NO ACTION ON UPDATE CASCADE;
