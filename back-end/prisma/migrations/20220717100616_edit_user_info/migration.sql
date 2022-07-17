/*
  Warnings:

  - You are about to drop the column `Email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `FirstName` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `LastName` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `UserName` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_name]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `login` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "user_Email_key";

-- DropIndex
DROP INDEX "user_UserName_key";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "Email",
DROP COLUMN "FirstName",
DROP COLUMN "LastName",
DROP COLUMN "UserName",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "login" TEXT NOT NULL,
ADD COLUMN     "user_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "user_user_name_key" ON "user"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
