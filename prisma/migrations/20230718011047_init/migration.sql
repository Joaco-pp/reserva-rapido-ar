-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "Id" TEXT NOT NULL,
    "Name" VARCHAR(50) NOT NULL,
    "LastName" VARCHAR(50) NOT NULL,
    "UserName" VARCHAR(50) NOT NULL,
    "Email" VARCHAR(70) NOT NULL,
    "Password" VARCHAR(30) NOT NULL,
    "Deleted" BOOLEAN NOT NULL DEFAULT false,
    "Role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Category" (
    "Id" TEXT NOT NULL,
    "Name" VARCHAR(50) NOT NULL,
    "Deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Post" (
    "Id" TEXT NOT NULL,
    "Tittle" VARCHAR(300) NOT NULL,
    "Content" VARCHAR(2000) NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "AuthorId" TEXT NOT NULL,
    "Deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "CategoriesOnPosts" (
    "PostId" TEXT NOT NULL,
    "CategoryId" TEXT NOT NULL,
    "AssignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CategoriesOnPosts_pkey" PRIMARY KEY ("PostId","CategoryId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Aviable_Email" ON "User"("Email", "Deleted");

-- CreateIndex
CREATE UNIQUE INDEX "Aviable_UserName" ON "User"("UserName", "Deleted");

-- CreateIndex
CREATE UNIQUE INDEX "Post_AuthorId_key" ON "Post"("AuthorId");

-- CreateIndex
CREATE UNIQUE INDEX "CategoriesOnPosts_PostId_CategoryId_key" ON "CategoriesOnPosts"("PostId", "CategoryId");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_AuthorId_fkey" FOREIGN KEY ("AuthorId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnPosts" ADD CONSTRAINT "CategoriesOnPosts_PostId_fkey" FOREIGN KEY ("PostId") REFERENCES "Post"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnPosts" ADD CONSTRAINT "CategoriesOnPosts_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES "Category"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
