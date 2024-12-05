/*
  Warnings:

  - Made the column `color` on table `persons` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "persons" ALTER COLUMN "color" SET NOT NULL;
