-- CreateTable
CREATE TABLE `Address` (
    `addressId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `country` VARCHAR(30) NOT NULL,
    `region` VARCHAR(30) NOT NULL,
    `city` VARCHAR(30) NOT NULL,
    `street` VARCHAR(30) NULL,
    `buildingNo` VARCHAR(6) NOT NULL,
    `flatNo` VARCHAR(6) NULL,
    `postCode` VARCHAR(10) NOT NULL,

    UNIQUE INDEX `Address_addressId_key`(`addressId`),
    PRIMARY KEY (`addressId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AddressPerson` (
    `addressId` BIGINT UNSIGNED NOT NULL,
    `personId` BIGINT UNSIGNED NOT NULL,

    INDEX `AddressPerson_personId_idx`(`personId`),
    PRIMARY KEY (`addressId`, `personId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AddressWorkshop` (
    `addressId` BIGINT UNSIGNED NOT NULL,
    `workshopId` BIGINT UNSIGNED NOT NULL,

    INDEX `AddressWorkshop_workshopId_idx`(`workshopId`),
    PRIMARY KEY (`addressId`, `workshopId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customer` (
    `customerId` BIGINT UNSIGNED NOT NULL,
    `workshopId` BIGINT UNSIGNED NOT NULL,
    `totalDue` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `description` VARCHAR(255) NULL,
    `deletedAt` TIMESTAMP(0) NULL,
    `NIP` VARCHAR(10) NULL,
    `companyName` VARCHAR(30) NULL,

    INDEX `Customer_workshopId_idx`(`workshopId`),
    UNIQUE INDEX `Customer_customerId_workshopId_key`(`customerId`, `workshopId`),
    PRIMARY KEY (`customerId`, `workshopId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employee` (
    `employeeId` BIGINT UNSIGNED NOT NULL,
    `workshopId` BIGINT UNSIGNED NOT NULL,
    `joinedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deletedAt` TIMESTAMP(0) NULL,
    `permissionSetId` BIGINT UNSIGNED NULL,

    INDEX `Employee_permissionSetId_idx`(`permissionSetId`),
    INDEX `Employee_workshopId_idx`(`workshopId`),
    UNIQUE INDEX `Employee_employeeId_workshopId_key`(`employeeId`, `workshopId`),
    PRIMARY KEY (`employeeId`, `workshopId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JobCategory` (
    `categoryId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `parentId` BIGINT UNSIGNED NULL,
    `description` VARCHAR(255) NULL,
    `isPopular` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `category_id`(`categoryId`),
    INDEX `JobCategory_parentId_idx`(`parentId`),
    PRIMARY KEY (`categoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Job` (
    `jobId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `categoryId` BIGINT UNSIGNED NOT NULL,
    `name` VARCHAR(50) NULL,
    `description` VARCHAR(255) NULL,
    `isPopular` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `job_id`(`jobId`),
    INDEX `Job_categoryId_idx`(`categoryId`),
    PRIMARY KEY (`jobId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PermissionSet` (
    `permissionSetId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `workshopId` BIGINT UNSIGNED NULL,
    `setName` VARCHAR(30) NOT NULL DEFAULT 'CUSTOM',
    `canReadWorkshopDetails` BOOLEAN NOT NULL DEFAULT false,
    `canUpdateWorkshopDetails` BOOLEAN NOT NULL DEFAULT false,
    `canModifyWorkshopDetails` BOOLEAN NOT NULL DEFAULT false,
    `canReadEmployees` BOOLEAN NOT NULL DEFAULT false,
    `canUpdateEmployees` BOOLEAN NOT NULL DEFAULT false,
    `canModifyEmployees` BOOLEAN NOT NULL DEFAULT false,
    `canReadCustomers` BOOLEAN NOT NULL DEFAULT false,
    `canUpdateCustomers` BOOLEAN NOT NULL DEFAULT false,
    `canModifyCustomers` BOOLEAN NOT NULL DEFAULT false,
    `canReadServices` BOOLEAN NOT NULL DEFAULT false,
    `canUpdateServices` BOOLEAN NOT NULL DEFAULT false,
    `canModifyServices` BOOLEAN NOT NULL DEFAULT false,
    `canReadTasks` BOOLEAN NOT NULL DEFAULT false,
    `canUpdateTasks` BOOLEAN NOT NULL DEFAULT false,
    `canModifyTasks` BOOLEAN NOT NULL DEFAULT false,
    `canReadReports` BOOLEAN NOT NULL DEFAULT false,
    `canGenerateReports` BOOLEAN NOT NULL DEFAULT false,
    `canModifyPermissions` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `permission_set_id`(`permissionSetId`),
    INDEX `PermissionSet_workshopId_idx`(`workshopId`),
    PRIMARY KEY (`permissionSetId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Person` (
    `personId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(30) NOT NULL,
    `lastName` VARCHAR(30) NOT NULL,
    `telephoneNumber` VARCHAR(12) NULL,
    `deletedAt` TIMESTAMP(0) NULL,

    UNIQUE INDEX `person_id`(`personId`),
    PRIMARY KEY (`personId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `reviewId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` BIGINT UNSIGNED NOT NULL,
    `workshopId` BIGINT UNSIGNED NOT NULL,
    `rating` DECIMAL(3, 2) NOT NULL DEFAULT 0.00,
    `reviewText` TEXT NOT NULL,
    `reviewDate` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` ENUM('pending', 'accepted', 'denied') NOT NULL DEFAULT 'pending',

    UNIQUE INDEX `review_id`(`reviewId`),
    INDEX `Review_userId_idx`(`userId`),
    INDEX `Review_workshopId_idx`(`workshopId`),
    PRIMARY KEY (`reviewId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReviewResponse` (
    `reviewResponseId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `reviewId` BIGINT UNSIGNED NOT NULL,
    `userId` BIGINT UNSIGNED NOT NULL,
    `parentResponseId` BIGINT UNSIGNED NULL,
    `responseText` TEXT NOT NULL,
    `responseDate` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` ENUM('pending', 'accepted', 'denied') NOT NULL DEFAULT 'pending',

    UNIQUE INDEX `review_response_id`(`reviewResponseId`),
    INDEX `ReviewResponse_parentResponseId_idx`(`parentResponseId`),
    INDEX `ReviewResponse_reviewId_idx`(`reviewId`),
    INDEX `ReviewResponse_userId_idx`(`userId`),
    PRIMARY KEY (`reviewResponseId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceRequestJob` (
    `serviceRequestId` BIGINT UNSIGNED NOT NULL,
    `jobId` BIGINT UNSIGNED NOT NULL,

    INDEX `ServiceRequestJob_jobId_idx`(`jobId`),
    PRIMARY KEY (`serviceRequestId`, `jobId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceRequest` (
    `serviceRequestId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `workshopId` BIGINT UNSIGNED NOT NULL,
    `vehicleId` BIGINT UNSIGNED NOT NULL,
    `personId` BIGINT UNSIGNED NOT NULL,
    `requestedAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` ENUM('pending', 'accepted', 'rejected') NULL DEFAULT 'pending',
    `description` VARCHAR(511) NULL,
    `approvedServiceId` BIGINT UNSIGNED NULL,
    `deletedAt` TIMESTAMP(0) NULL,

    UNIQUE INDEX `service_request_id`(`serviceRequestId`),
    UNIQUE INDEX `approved_service_id`(`approvedServiceId`),
    INDEX `ServiceRequest_vehicleId_idx`(`vehicleId`),
    INDEX `ServiceRequest_workshopId_idx`(`workshopId`),
    INDEX `ServiceRequest_personId_idx`(`personId`),
    PRIMARY KEY (`serviceRequestId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceTask` (
    `taskId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `serviceId` BIGINT UNSIGNED NOT NULL,
    `jobId` BIGINT UNSIGNED NULL,
    `customName` VARCHAR(50) NULL,
    `description` VARCHAR(255) NOT NULL,
    `status` ENUM('pending', 'completed', 'cancelled') NULL DEFAULT 'pending',
    `executionTime` FLOAT NOT NULL,
    `partsCost` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,

    UNIQUE INDEX `task_id`(`taskId`),
    INDEX `ServiceTask_serviceId_idx`(`serviceId`),
    PRIMARY KEY (`taskId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `serviceId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `serviceRequestId` BIGINT UNSIGNED NULL,
    `workshopId` BIGINT UNSIGNED NOT NULL,
    `vehicleId` BIGINT UNSIGNED NOT NULL,
    `customerId` BIGINT UNSIGNED NOT NULL,
    `employeeId` BIGINT UNSIGNED NOT NULL,
    `description` VARCHAR(511) NULL,
    `status` ENUM('pending', 'completed', 'cancelled') NULL DEFAULT 'pending',
    `payedOff` BOOLEAN NOT NULL DEFAULT false,
    `paymentAmount` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `serviceStartDate` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `serviceEndDate` DATETIME(0) NULL,
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deletedAt` TIMESTAMP(0) NULL,

    UNIQUE INDEX `service_id`(`serviceId`),
    UNIQUE INDEX `service_request_id`(`serviceRequestId`),
    INDEX `Service_customerId_idx`(`customerId`),
    INDEX `Service_employeeId_idx`(`employeeId`),
    INDEX `Service_vehicleId_idx`(`vehicleId`),
    INDEX `Service_workshopId_idx`(`workshopId`),
    PRIMARY KEY (`serviceId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmployeeTask` (
    `taskId` BIGINT UNSIGNED NOT NULL,
    `employeeId` BIGINT UNSIGNED NOT NULL,
    `workshopId` BIGINT UNSIGNED NOT NULL,

    INDEX `EmployeeTask_taskId_idx`(`taskId`),
    PRIMARY KEY (`employeeId`, `taskId`, `workshopId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserReport` (
    `reportId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` BIGINT UNSIGNED NOT NULL,
    `reportText` TINYTEXT NOT NULL,
    `reportedType` ENUM('user', 'workshop', 'review', 'review_response') NOT NULL,
    `reportedId` BIGINT UNSIGNED NOT NULL,
    `status` ENUM('pending', 'considered', 'closed') NOT NULL DEFAULT 'pending',
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL,

    UNIQUE INDEX `report_id`(`reportId`),
    INDEX `UserReport_userId_idx`(`userId`),
    PRIMARY KEY (`reportId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `userId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `personId` BIGINT UNSIGNED NULL,
    `username` VARCHAR(30) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(50) NULL,
    `isVerified` BOOLEAN NULL,
    `status` ENUM('active', 'suspended') NULL DEFAULT 'active',
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deletedAt` TIMESTAMP(0) NULL,

    UNIQUE INDEX `user_id`(`userId`),
    UNIQUE INDEX `person_id`(`personId`),
    UNIQUE INDEX `uniqueUsername`(`username`, `deletedAt`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vehicle` (
    `vehicleId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `personId` BIGINT UNSIGNED NOT NULL,
    `brandName` VARCHAR(50) NOT NULL,
    `modelId` BIGINT UNSIGNED NOT NULL,
    `deletedAt` TIMESTAMP(0) NULL,

    UNIQUE INDEX `vehicle_id`(`vehicleId`),
    INDEX `Vehicle_brandName_idx`(`brandName`),
    INDEX `Vehicle_modelId_idx`(`modelId`),
    INDEX `Vehicle_personId_idx`(`personId`),
    PRIMARY KEY (`vehicleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleBrand` (
    `brandName` VARCHAR(50) NOT NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `brand_name`(`brandName`),
    PRIMARY KEY (`brandName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleDetails` (
    `vehicleId` BIGINT UNSIGNED NOT NULL,
    `yearOfProduction` INTEGER NULL,
    `VIN` CHAR(17) NULL,
    `engineCapacity` VARCHAR(5) NULL,
    `licensePlate` VARCHAR(20) NULL,
    `fuelType` VARCHAR(16) NULL,
    `engineNo` VARCHAR(16) NULL,
    `bodyColor` VARCHAR(16) NULL,
    `deletedAt` TIMESTAMP(0) NULL,

    PRIMARY KEY (`vehicleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicleModel` (
    `modelId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `modelName` VARCHAR(50) NOT NULL,
    `brandName` VARCHAR(50) NOT NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `model_id`(`modelId`),
    INDEX `VehicleModel_brandName_idx`(`brandName`),
    UNIQUE INDEX `model_name`(`modelName`, `brandName`),
    PRIMARY KEY (`modelId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Workshop` (
    `workshopId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `personId` BIGINT UNSIGNED NOT NULL,
    `email` VARCHAR(50) NULL,
    `isVerified` BOOLEAN NULL DEFAULT false,
    `isManagingWork` BOOLEAN NULL DEFAULT false,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deletedAt` TIMESTAMP(0) NULL,

    UNIQUE INDEX `workshop_id`(`workshopId`),
    INDEX `Workshop_personId_idx`(`personId`),
    PRIMARY KEY (`workshopId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WorkshopDetails` (
    `workshopId` BIGINT UNSIGNED NOT NULL,
    `rating` DECIMAL(3, 2) NOT NULL DEFAULT 0.00,
    `workshopName` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `telephoneNumber` VARCHAR(12) NULL,
    `logoURL` VARCHAR(255) NULL,
    `status` ENUM('active', 'suspended') NULL DEFAULT 'active',
    `NIP` VARCHAR(10) NULL,
    `deletedAt` TIMESTAMP(0) NULL,

    PRIMARY KEY (`workshopId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WorkshopJob` (
    `workshopJobId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `workshopId` BIGINT UNSIGNED NOT NULL,
    `jobId` BIGINT UNSIGNED NOT NULL,
    `workshopDescription` VARCHAR(255) NULL,
    `minPrice` DECIMAL(10, 2) NULL,
    `maxPrice` DECIMAL(10, 2) NULL,
    `price` DECIMAL(10, 2) NULL,
    `availability` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `workshop_job_id`(`workshopJobId`),
    INDEX `WorkshopJob_jobId_idx`(`jobId`),
    UNIQUE INDEX `workshop_id`(`workshopId`, `jobId`),
    PRIMARY KEY (`workshopJobId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WorkshopJobCategory` (
    `workshopId` BIGINT UNSIGNED NOT NULL,
    `categoryId` BIGINT UNSIGNED NOT NULL,

    INDEX `WorkshopJobCategory_categoryId_idx`(`categoryId`),
    PRIMARY KEY (`workshopId`, `categoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AddressPerson` ADD CONSTRAINT `fk_addresses_persons_address_id` FOREIGN KEY (`addressId`) REFERENCES `Address`(`addressId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AddressPerson` ADD CONSTRAINT `fk_addresses_persons_person_id` FOREIGN KEY (`personId`) REFERENCES `Person`(`personId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AddressWorkshop` ADD CONSTRAINT `fk_addresses_workshops_address_id` FOREIGN KEY (`addressId`) REFERENCES `Address`(`addressId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AddressWorkshop` ADD CONSTRAINT `fk_addresses_workshops_workshop_id` FOREIGN KEY (`workshopId`) REFERENCES `Workshop`(`workshopId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `fk_customerIsPerson` FOREIGN KEY (`customerId`) REFERENCES `Person`(`personId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `fk_customerOfWorkshop` FOREIGN KEY (`workshopId`) REFERENCES `Workshop`(`workshopId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `fk_employeeCanHavePermissionSetAssigned` FOREIGN KEY (`permissionSetId`) REFERENCES `PermissionSet`(`permissionSetId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `fk_employeeWorksAtWorkshop` FOREIGN KEY (`workshopId`) REFERENCES `Workshop`(`workshopId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `fk_personIsEmployee` FOREIGN KEY (`employeeId`) REFERENCES `Person`(`personId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JobCategory` ADD CONSTRAINT `fk_subcategory` FOREIGN KEY (`parentId`) REFERENCES `JobCategory`(`categoryId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Job` ADD CONSTRAINT `fk_jobFallsUnderCategory` FOREIGN KEY (`categoryId`) REFERENCES `JobCategory`(`categoryId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PermissionSet` ADD CONSTRAINT `fk_permissionSetForCertainWorkshop` FOREIGN KEY (`workshopId`) REFERENCES `Workshop`(`workshopId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `fk_userReviews` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `fk_userReviewsWorkshop` FOREIGN KEY (`workshopId`) REFERENCES `Workshop`(`workshopId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ReviewResponse` ADD CONSTRAINT `fk_responseToResponse` FOREIGN KEY (`parentResponseId`) REFERENCES `ReviewResponse`(`reviewResponseId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ReviewResponse` ADD CONSTRAINT `fk_responseUnderReview` FOREIGN KEY (`reviewId`) REFERENCES `Review`(`reviewId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ReviewResponse` ADD CONSTRAINT `fk_userResponses` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ServiceRequestJob` ADD CONSTRAINT `fk_jobsAssignedToServiceRequest` FOREIGN KEY (`jobId`) REFERENCES `Job`(`jobId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceRequestJob` ADD CONSTRAINT `fk_serviceRequestHasJobs` FOREIGN KEY (`serviceRequestId`) REFERENCES `ServiceRequest`(`serviceRequestId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceRequest` ADD CONSTRAINT `fk_requestApprovedService` FOREIGN KEY (`approvedServiceId`) REFERENCES `Service`(`serviceId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceRequest` ADD CONSTRAINT `fk_requestAssignedToVehicle` FOREIGN KEY (`vehicleId`) REFERENCES `Vehicle`(`vehicleId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceRequest` ADD CONSTRAINT `fk_requestAssignedToWorkshop` FOREIGN KEY (`workshopId`) REFERENCES `Workshop`(`workshopId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceRequest` ADD CONSTRAINT `fk_requestFromPerson` FOREIGN KEY (`personId`) REFERENCES `Person`(`personId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceTask` ADD CONSTRAINT `fk_taskIsAPartOfService` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`serviceId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `fk_customerOrdersService` FOREIGN KEY (`customerId`, `workshopId`) REFERENCES `Customer`(`customerId`, `workshopId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `fk_employeeResponsibleForService` FOREIGN KEY (`employeeId`, `workshopId`) REFERENCES `Employee`(`employeeId`, `workshopId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `fk_serviceAssignedToVehicle` FOREIGN KEY (`vehicleId`) REFERENCES `Vehicle`(`vehicleId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `fk_serviceAssignedToWorkshop` FOREIGN KEY (`workshopId`) REFERENCES `Workshop`(`workshopId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmployeeTask` ADD CONSTRAINT `fk_tasks_employees_employeeCanBeAssignedToManyTasks` FOREIGN KEY (`employeeId`, `workshopId`) REFERENCES `Employee`(`employeeId`, `workshopId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmployeeTask` ADD CONSTRAINT `fk_tasks_employees_taskCanBeAssignedToManyEmployees` FOREIGN KEY (`taskId`) REFERENCES `ServiceTask`(`taskId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserReport` ADD CONSTRAINT `fk_reportMadeByUser` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `fk_userCanBePerson` FOREIGN KEY (`personId`) REFERENCES `Person`(`personId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `fk_vehicleHasBrand` FOREIGN KEY (`brandName`) REFERENCES `VehicleBrand`(`brandName`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `fk_vehicleHasModel` FOREIGN KEY (`modelId`) REFERENCES `VehicleModel`(`modelId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `fk_vehicleHasOwner` FOREIGN KEY (`personId`) REFERENCES `Person`(`personId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleDetails` ADD CONSTRAINT `fk_vehicleHasDetails` FOREIGN KEY (`vehicleId`) REFERENCES `Vehicle`(`vehicleId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicleModel` ADD CONSTRAINT `fk_modelMadeByBrand` FOREIGN KEY (`brandName`) REFERENCES `VehicleBrand`(`brandName`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Workshop` ADD CONSTRAINT `fk_workshopHasOwner` FOREIGN KEY (`personId`) REFERENCES `Person`(`personId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkshopDetails` ADD CONSTRAINT `fk_workshopHasDetails` FOREIGN KEY (`workshopId`) REFERENCES `Workshop`(`workshopId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkshopJob` ADD CONSTRAINT `fk_jobsCanBeOfferedByWorkshops` FOREIGN KEY (`jobId`) REFERENCES `Job`(`jobId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkshopJob` ADD CONSTRAINT `fk_workshopCanOffersJobs` FOREIGN KEY (`workshopId`) REFERENCES `Workshop`(`workshopId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkshopJobCategory` ADD CONSTRAINT `fk_categoryHandledByWorkshop` FOREIGN KEY (`categoryId`) REFERENCES `JobCategory`(`categoryId`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkshopJobCategory` ADD CONSTRAINT `fk_workshopOfferJobsFromCategory` FOREIGN KEY (`workshopId`) REFERENCES `Workshop`(`workshopId`) ON DELETE NO ACTION ON UPDATE CASCADE;
