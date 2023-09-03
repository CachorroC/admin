/*
  Warnings:

  - A unique constraint covering the columns `[numero]` on the table `Carpeta` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Carpeta" ALTER COLUMN "numero" DROP DEFAULT;
DROP SEQUENCE "Carpeta_numero_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Carpeta_numero_key" ON "Carpeta"("numero");
