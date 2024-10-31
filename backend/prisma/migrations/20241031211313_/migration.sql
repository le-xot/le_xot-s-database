/*
  Warnings:

  - The `type` column on the `games` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `type` column on the `videos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PrismaRoles" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "PrismaTypes" AS ENUM ('PAID', 'FREE');

-- AlterTable
ALTER TABLE "games" DROP COLUMN "type",
ADD COLUMN     "type" "PrismaTypes";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role",
ADD COLUMN     "role" "PrismaRoles" NOT NULL DEFAULT 'USER';

-- AlterTable
ALTER TABLE "videos" DROP COLUMN "type",
ADD COLUMN     "type" "PrismaTypes";

-- DropEnum
DROP TYPE "Roles";

-- DropEnum
DROP TYPE "Type";
