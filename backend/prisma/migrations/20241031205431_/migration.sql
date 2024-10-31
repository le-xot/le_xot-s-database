-- DropForeignKey
ALTER TABLE "games" DROP CONSTRAINT "games_personId_fkey";

-- DropForeignKey
ALTER TABLE "videos" DROP CONSTRAINT "videos_personId_fkey";

-- AlterTable
ALTER TABLE "games" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "personId" DROP NOT NULL,
ALTER COLUMN "type" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL;

-- AlterTable
ALTER TABLE "videos" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "personId" DROP NOT NULL,
ALTER COLUMN "type" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "genre" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "videos" ADD CONSTRAINT "videos_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE SET NULL ON UPDATE CASCADE;
