-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_addressId_fkey`;

-- DropForeignKey
ALTER TABLE `workshop` DROP FOREIGN KEY `fk_workshopHasAddress`;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Address`(`addressId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Workshop` ADD CONSTRAINT `fk_workshopHasAddress` FOREIGN KEY (`addressId`) REFERENCES `Address`(`addressId`) ON DELETE SET NULL ON UPDATE CASCADE;
