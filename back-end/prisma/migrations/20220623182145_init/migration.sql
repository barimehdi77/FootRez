-- CreateTable
CREATE TABLE "Teams" (
    "id" SERIAL NOT NULL,
    "teamName" TEXT NOT NULL,
    "teamPlayers" TEXT[],
    "TeamCaptin" TEXT NOT NULL,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teams_teamName_key" ON "Teams"("teamName");
