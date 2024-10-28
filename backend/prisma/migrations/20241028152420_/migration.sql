/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `games` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `videos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "games_title_key" ON "games" ("title");

-- CreateIndex
CREATE UNIQUE INDEX "videos_title_key" ON "videos" ("title");
