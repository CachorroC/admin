/*
  Warnings:

  - The primary key for the `Telefono` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `fijo` on the `Telefono` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `celular` on the `Telefono` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to drop the `PrismaCarpeta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PrismaDeudor` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `fijo` on table `Telefono` required. This step will fail if there are existing NULL values in that column.
  - Made the column `celular` on table `Telefono` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `cedula` on the `Telefono` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "PrismaCarpeta" DROP CONSTRAINT "PrismaCarpeta_cedula_fkey";

-- DropForeignKey
ALTER TABLE "Proceso" DROP CONSTRAINT "Proceso_llaveProceso_fkey";

-- DropForeignKey
ALTER TABLE "Telefono" DROP CONSTRAINT "Telefono_cedula_fkey";

-- AlterTable
ALTER TABLE "Telefono" DROP CONSTRAINT "Telefono_pkey",
ALTER COLUMN "fijo" SET NOT NULL,
ALTER COLUMN "fijo" SET DATA TYPE INTEGER,
ALTER COLUMN "celular" SET NOT NULL,
ALTER COLUMN "celular" SET DATA TYPE INTEGER,
DROP COLUMN "cedula",
ADD COLUMN     "cedula" BIGINT NOT NULL,
ADD CONSTRAINT "Telefono_pkey" PRIMARY KEY ("cedula");

-- DropTable
DROP TABLE "PrismaCarpeta";

-- DropTable
DROP TABLE "PrismaDeudor";

-- CreateTable
CREATE TABLE "Deudor" (
    "cedula" BIGINT NOT NULL,
    "primerNombre" TEXT NOT NULL,
    "segundoNombre" TEXT,
    "primerApellido" TEXT NOT NULL,
    "segundoApellido" TEXT,
    "email" TEXT,
    "direccion" TEXT,

    CONSTRAINT "Deudor_pkey" PRIMARY KEY ("cedula")
);

-- CreateTable
CREATE TABLE "Carpeta" (
    "numero" SERIAL NOT NULL,
    "category" "Category" NOT NULL DEFAULT 'Bancolombia',
    "tipoProceso" TEXT NOT NULL,
    "llaveProceso" TEXT NOT NULL,
    "deudorCedula" BIGINT NOT NULL,

    CONSTRAINT "Carpeta_pkey" PRIMARY KEY ("numero")
);

-- CreateIndex
CREATE UNIQUE INDEX "Deudor_cedula_key" ON "Deudor"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Carpeta_llaveProceso_key" ON "Carpeta"("llaveProceso");

-- AddForeignKey
ALTER TABLE "Carpeta" ADD CONSTRAINT "Carpeta_deudorCedula_fkey" FOREIGN KEY ("deudorCedula") REFERENCES "Deudor"("cedula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proceso" ADD CONSTRAINT "Proceso_llaveProceso_fkey" FOREIGN KEY ("llaveProceso") REFERENCES "Carpeta"("llaveProceso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Telefono" ADD CONSTRAINT "Telefono_cedula_fkey" FOREIGN KEY ("cedula") REFERENCES "Deudor"("cedula") ON DELETE RESTRICT ON UPDATE CASCADE;
