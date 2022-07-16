/*
  Warnings:

  - You are about to drop the `Teams` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Teams";

-- CreateTable
CREATE TABLE "team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "age" INTEGER NOT NULL,
    "teamId" INTEGER,

    CONSTRAINT "player_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "team_name_key" ON "team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "player_name_key" ON "player"("name");

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
