/*
  Warnings:

  - Made the column `personId` on table `videos` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "videos" DROP CONSTRAINT "videos_personId_fkey";

-- AlterTable
ALTER TABLE "videos"
    ALTER COLUMN "personId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "videos"
    ADD CONSTRAINT "videos_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
