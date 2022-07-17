/*
  Warnings:

  - A unique constraint covering the columns `[intra_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "intra_id" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "user_intra_id_key" ON "user"("intra_id");
