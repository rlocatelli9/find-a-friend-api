/*
  Warnings:

  - The `deficiencies` column on the `pets` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "pets" DROP COLUMN "deficiencies",
ADD COLUMN     "deficiencies" BOOLEAN NOT NULL DEFAULT false;
