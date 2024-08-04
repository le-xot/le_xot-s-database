-- CreateEnum
CREATE TYPE "PrismaStatuses" AS ENUM ('QUEUE', 'DONE', 'PROGRESS', 'NOTFINISHED', 'DROP');

-- CreateEnum
CREATE TYPE "PrismaGenres" AS ENUM ('GAME', 'ANIME', 'MOVIE', 'CARTOON', 'SERIES');

-- CreateEnum
CREATE TYPE "PrismaGrades" AS ENUM ('RECOMMEND', 'LIKE', 'BEER', 'DISLIKE');

-- CreateTable
CREATE TABLE "Record" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "status" "PrismaStatuses" NOT NULL,
    "genre" "PrismaGenres" NOT NULL,
    "grade" "PrismaGrades",
    "comment" TEXT NOT NULL,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);
