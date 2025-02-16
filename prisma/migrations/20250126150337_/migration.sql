/*
  Warnings:

  - A unique constraint covering the columns `[pet_id]` on the table `posts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "posts_pet_id_key" ON "posts"("pet_id");
