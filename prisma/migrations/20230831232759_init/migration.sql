/*
  Warnings:

  - Changed the type of `tipoProceso` on the `PrismaCarpeta` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "TipoProceso" ADD VALUE 'PRENDARO';
ALTER TYPE "TipoProceso" ADD VALUE 'HIPOTECARIA';
ALTER TYPE "TipoProceso" ADD VALUE 'HIPOTECARO';
ALTER TYPE "TipoProceso" ADD VALUE 'SOACHA';

-- AlterTable
ALTER TABLE "PrismaCarpeta" DROP COLUMN "tipoProceso",
ADD COLUMN     "tipoProceso" TEXT NOT NULL;
