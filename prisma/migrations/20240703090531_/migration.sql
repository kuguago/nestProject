/*
  Warnings:

  - You are about to drop the `SubappVersion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Versions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Versions` DROP FOREIGN KEY `Versions_subappId_fkey`;

-- DropTable
DROP TABLE `SubappVersion`;

-- DropTable
DROP TABLE `Versions`;

-- CreateTable
CREATE TABLE `Subapp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subappName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Version` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `versionName` VARCHAR(191) NOT NULL,
    `versionEntry` VARCHAR(191) NOT NULL,
    `subappId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Version` ADD CONSTRAINT `Version_subappId_fkey` FOREIGN KEY (`subappId`) REFERENCES `Subapp`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
