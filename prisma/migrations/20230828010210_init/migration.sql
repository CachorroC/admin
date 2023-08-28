/*
  Warnings:

  - The primary key for the `PrismaCarpeta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `carpeta` on the `PrismaCarpeta` table. All the data in the column will be lost.
  - You are about to drop the column `idProceso` on the `PrismaCarpeta` table. All the data in the column will be lost.
  - The primary key for the `PrismaDeudor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `numero` on the `PrismaDeudor` table. All the data in the column will be lost.
  - The primary key for the `Telefono` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `carpeta` on the `Telefono` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cedula]` on the table `PrismaCarpeta` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[llaveProceso]` on the table `PrismaCarpeta` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cedula` to the `PrismaCarpeta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `llaveProceso` to the `PrismaCarpeta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cedula` to the `Telefono` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PrismaCarpeta" DROP CONSTRAINT "PrismaCarpeta_carpeta_fkey";

-- DropForeignKey
ALTER TABLE "Telefono" DROP CONSTRAINT "Telefono_carpeta_fkey";

-- DropIndex
DROP INDEX "PrismaCarpeta_idProceso_key";

-- AlterTable
ALTER TABLE "PrismaCarpeta" DROP CONSTRAINT "PrismaCarpeta_pkey",
DROP COLUMN "carpeta",
DROP COLUMN "idProceso",
ADD COLUMN     "cedula" TEXT NOT NULL,
ADD COLUMN     "llaveProceso" TEXT NOT NULL,
ADD COLUMN     "numero" SERIAL NOT NULL,
ADD CONSTRAINT "PrismaCarpeta_pkey" PRIMARY KEY ("numero");

-- AlterTable
ALTER TABLE "PrismaDeudor" DROP CONSTRAINT "PrismaDeudor_pkey",
DROP COLUMN "numero",
ADD CONSTRAINT "PrismaDeudor_pkey" PRIMARY KEY ("cedula");

-- AlterTable
ALTER TABLE "Telefono" DROP CONSTRAINT "Telefono_pkey",
DROP COLUMN "carpeta",
ADD COLUMN     "cedula" TEXT NOT NULL,
ADD CONSTRAINT "Telefono_pkey" PRIMARY KEY ("cedula");

-- CreateTable
CREATE TABLE "Proceso" (
    "idProceso" BIGINT NOT NULL,
    "idConexion" INTEGER NOT NULL,
    "llaveProceso" TEXT NOT NULL,
    "fechaProceso" TIMESTAMP(3) NOT NULL,
    "fechaUltimaActuacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Proceso_pkey" PRIMARY KEY ("llaveProceso")
);

-- CreateIndex
CREATE UNIQUE INDEX "Proceso_idProceso_key" ON "Proceso"("idProceso");

-- CreateIndex
CREATE UNIQUE INDEX "PrismaCarpeta_cedula_key" ON "PrismaCarpeta"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "PrismaCarpeta_llaveProceso_key" ON "PrismaCarpeta"("llaveProceso");

-- AddForeignKey
ALTER TABLE "PrismaCarpeta" ADD CONSTRAINT "PrismaCarpeta_cedula_fkey" FOREIGN KEY ("cedula") REFERENCES "PrismaDeudor"("cedula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proceso" ADD CONSTRAINT "Proceso_llaveProceso_fkey" FOREIGN KEY ("llaveProceso") REFERENCES "PrismaCarpeta"("llaveProceso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Telefono" ADD CONSTRAINT "Telefono_cedula_fkey" FOREIGN KEY ("cedula") REFERENCES "PrismaDeudor"("cedula") ON DELETE RESTRICT ON UPDATE CASCADE;
