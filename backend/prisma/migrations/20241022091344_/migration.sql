-- CreateEnum
CREATE TYPE "Type" AS ENUM ('PAID', 'FREE');

-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "PrismaStatuses" AS ENUM ('QUEUE', 'DONE', 'PROGRESS', 'UNFINISHED', 'DROP');

-- CreateEnum
CREATE TYPE "PrismaGenres" AS ENUM ('ANIME', 'MOVIE', 'CARTOON', 'SERIES');

-- CreateEnum
CREATE TYPE "PrismaGrades" AS ENUM ('RECOMMEND', 'LIKE', 'BEER', 'DISLIKE', 'NOTGRADED');

-- CreateTable
CREATE TABLE "games"
(
    "id"       SERIAL           NOT NULL,
    "title"    TEXT             NOT NULL,
    "personId" INTEGER          NOT NULL,
    "type"     "Type"           NOT NULL,
    "status"   "PrismaStatuses" NOT NULL,
    "grade"    "PrismaGrades",

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "videos"
(
    "id"       SERIAL           NOT NULL,
    "title"    TEXT             NOT NULL,
    "personId" INTEGER,
    "type"     "Type"           NOT NULL,
    "status"   "PrismaStatuses" NOT NULL,
    "genre"    "PrismaGenres"   NOT NULL,
    "grade"    "PrismaGrades",

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "persons"
(
    "id"   SERIAL NOT NULL,
    "name" TEXT   NOT NULL,

    CONSTRAINT "persons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users"
(
    "id"       SERIAL  NOT NULL,
    "username" TEXT    NOT NULL,
    "password" TEXT    NOT NULL,
    "role"     "Roles" NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "persons_name_key" ON "persons" ("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users" ("username");

-- AddForeignKey
ALTER TABLE "games"
    ADD CONSTRAINT "games_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "videos"
    ADD CONSTRAINT "videos_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons" ("id") ON DELETE SET NULL ON UPDATE CASCADE;
