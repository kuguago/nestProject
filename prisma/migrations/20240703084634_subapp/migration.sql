-- CreateTable
CREATE TABLE `SubappVersion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subappName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SubappVersion_id_subappName_key`(`id`, `subappName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Versions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `versionName` VARCHAR(191) NOT NULL,
    `versionEntry` VARCHAR(191) NOT NULL,
    `subappId` INTEGER NOT NULL,

    UNIQUE INDEX `Versions_id_versionName_versionEntry_key`(`id`, `versionName`, `versionEntry`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Versions` ADD CONSTRAINT `Versions_subappId_fkey` FOREIGN KEY (`subappId`) REFERENCES `SubappVersion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
