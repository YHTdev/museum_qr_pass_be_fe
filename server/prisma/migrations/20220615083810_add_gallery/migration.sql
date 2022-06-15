-- CreateTable
CREATE TABLE `Gallery` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `museumId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Gallery` ADD CONSTRAINT `Gallery_museumId_fkey` FOREIGN KEY (`museumId`) REFERENCES `Museum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;