-- CreateTable
CREATE TABLE `EmployeePermission` (
    `permissionId` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `description` VARCHAR(255) NULL,
    `action` VARCHAR(30) NOT NULL,
    `subject` VARCHAR(30) NOT NULL,
    `conditions` JSON NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL,

    UNIQUE INDEX `EmployeePermission_name_key`(`name`),
    PRIMARY KEY (`permissionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EmployeeToEmployeePermission` (
    `A` BIGINT UNSIGNED NOT NULL,
    `B` BIGINT UNSIGNED NOT NULL,

    UNIQUE INDEX `_EmployeeToEmployeePermission_AB_unique`(`A`, `B`),
    INDEX `_EmployeeToEmployeePermission_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_EmployeeToEmployeePermission` ADD CONSTRAINT `_EmployeeToEmployeePermission_A_fkey` FOREIGN KEY (`A`) REFERENCES `Employee`(`employeeId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EmployeeToEmployeePermission` ADD CONSTRAINT `_EmployeeToEmployeePermission_B_fkey` FOREIGN KEY (`B`) REFERENCES `EmployeePermission`(`permissionId`) ON DELETE CASCADE ON UPDATE CASCADE;
