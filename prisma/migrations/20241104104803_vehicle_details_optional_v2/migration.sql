-- AddForeignKey
ALTER TABLE `VehicleDetails` ADD CONSTRAINT `fk_vehicleHasDetails` FOREIGN KEY (`vehicleId`) REFERENCES `Vehicle`(`vehicleId`) ON DELETE NO ACTION ON UPDATE CASCADE;
