/*
  Warnings:

  - The values [NOTGRADED] on the enum `PrismaGrades` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PrismaGrades_new" AS ENUM ('RECOMMEND', 'LIKE', 'BEER', 'DISLIKE');
ALTER TABLE "games" ALTER COLUMN "grade" TYPE "PrismaGrades_new" USING ("grade"::text::"PrismaGrades_new");
ALTER TABLE "videos" ALTER COLUMN "grade" TYPE "PrismaGrades_new" USING ("grade"::text::"PrismaGrades_new");
ALTER TYPE "PrismaGrades" RENAME TO "PrismaGrades_old";
ALTER TYPE "PrismaGrades_new" RENAME TO "PrismaGrades";
DROP TYPE "PrismaGrades_old";
COMMIT;
