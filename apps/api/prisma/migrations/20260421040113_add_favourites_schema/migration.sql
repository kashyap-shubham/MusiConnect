-- CreateEnum
CREATE TYPE "FavouriteEntityType" AS ENUM ('SONG', 'PLAYLIST');

-- CreateTable
CREATE TABLE "Favourite" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "entityType" "FavouriteEntityType" NOT NULL,
    "entityId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Favourite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Favourite_userId_entityType_idx" ON "Favourite"("userId", "entityType");

-- CreateIndex
CREATE UNIQUE INDEX "Favourite_userId_entityType_entityId_key" ON "Favourite"("userId", "entityType", "entityId");

-- AddForeignKey
ALTER TABLE "Favourite" ADD CONSTRAINT "Favourite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
