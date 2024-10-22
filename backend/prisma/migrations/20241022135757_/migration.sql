-- AlterTable
ALTER TABLE "games"
    ALTER COLUMN "status" SET DEFAULT 'QUEUE';

-- AlterTable
ALTER TABLE "videos"
    ALTER COLUMN "status" SET DEFAULT 'QUEUE';
