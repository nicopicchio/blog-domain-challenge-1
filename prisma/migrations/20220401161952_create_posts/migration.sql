-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "postTitle" VARCHAR(150) NOT NULL,
    "content" TEXT NOT NULL,
    "isLive" BOOLEAN NOT NULL DEFAULT false,
    "pictureUrl" TEXT,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
