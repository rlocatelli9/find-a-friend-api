/*
  Warnings:

  - A unique constraint covering the columns `[cnpj]` on the table `orgs` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "orgs_cnpj_key" ON "orgs"("cnpj");
