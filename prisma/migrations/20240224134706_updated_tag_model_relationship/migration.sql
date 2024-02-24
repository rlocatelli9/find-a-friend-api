/*
  Warnings:

  - You are about to drop the column `name` on the `tags` table. All the data in the column will be lost.
  - The primary key for the `tags_on_posts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `tags_on_posts` table. All the data in the column will be lost.
  - You are about to drop the `address` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `value` to the `tags` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag_id` to the `tags_on_posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "address" DROP CONSTRAINT "address_org_id_fkey";

-- DropForeignKey
ALTER TABLE "tags_on_posts" DROP CONSTRAINT "tags_on_posts_category_id_fkey";

-- AlterTable
ALTER TABLE "tags" DROP COLUMN "name",
ADD COLUMN     "value" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tags_on_posts" DROP CONSTRAINT "tags_on_posts_pkey",
DROP COLUMN "category_id",
ADD COLUMN     "tag_id" TEXT NOT NULL,
ADD CONSTRAINT "tags_on_posts_pkey" PRIMARY KEY ("post_id", "tag_id");

-- DropTable
DROP TABLE "address";

-- CreateTable
CREATE TABLE "addresses" (
    "id" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,
    "org_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "addresses_org_id_key" ON "addresses"("org_id");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "orgs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags_on_posts" ADD CONSTRAINT "tags_on_posts_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
