/*
  Warnings:

  - You are about to drop the column `actived_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `addresses` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `city` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complement` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uf` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip_code` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `pets` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('DOG', 'CAT', 'OTHER');

-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_org_id_fkey";

-- AlterTable
ALTER TABLE "orgs" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "complement" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "latitude" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "longitude" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "uf" TEXT NOT NULL,
ADD COLUMN     "zip_code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "type",
ADD COLUMN     "type" "Type" NOT NULL,
ALTER COLUMN "size" DROP DEFAULT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "actived_at";

-- DropTable
DROP TABLE "addresses";

-- DropEnum
DROP TYPE "TypePet";
