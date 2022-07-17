/*
  Warnings:

  - Made the column `name` on table `player` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "player" ALTER COLUMN "name" SET NOT NULL;

-- CreateTable
CREATE TABLE "timezone" (
    "id" TEXT NOT NULL,
    "isReserved" BOOLEAN NOT NULL DEFAULT false,
    "teamId" INTEGER NOT NULL,
    "weekId" INTEGER,

    CONSTRAINT "timezone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "week" (
    "id" SERIAL NOT NULL,
    "DayName" TEXT NOT NULL,

    CONSTRAINT "week_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "UserName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "ProfileDone" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "timezone_id_key" ON "timezone"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_UserName_key" ON "user"("UserName");

-- CreateIndex
CREATE UNIQUE INDEX "user_Email_key" ON "user"("Email");

-- AddForeignKey
ALTER TABLE "timezone" ADD CONSTRAINT "timezone_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "timezone" ADD CONSTRAINT "timezone_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "week"("id") ON DELETE SET NULL ON UPDATE CASCADE;
