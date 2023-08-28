/*
  Warnings:

  - The primary key for the `PrismaCarpeta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cedula` on the `PrismaCarpeta` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `PrismaCarpeta` table. All the data in the column will be lost.
  - The primary key for the `PrismaDeudor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `PrismaDeudor` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cedula]` on the table `PrismaDeudor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `carpeta` to the `PrismaCarpeta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cedula` to the `PrismaDeudor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PrismaCarpeta" DROP CONSTRAINT "PrismaCarpeta_cedula_fkey";

-- DropIndex
DROP INDEX "PrismaDeudor_id_key";

-- AlterTable
ALTER TABLE "PrismaCarpeta" DROP CONSTRAINT "PrismaCarpeta_pkey",
DROP COLUMN "cedula",
DROP COLUMN "id",
ADD COLUMN     "carpeta" INTEGER NOT NULL,
ADD CONSTRAINT "PrismaCarpeta_pkey" PRIMARY KEY ("idProceso");

-- AlterTable
ALTER TABLE "PrismaDeudor" DROP CONSTRAINT "PrismaDeudor_pkey",
DROP COLUMN "id",
ADD COLUMN     "cedula" TEXT NOT NULL,
ADD COLUMN     "numero" SERIAL NOT NULL,
ADD CONSTRAINT "PrismaDeudor_pkey" PRIMARY KEY ("numero");

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Telefono" (
    "fijo" INTEGER,
    "celular" INTEGER,
    "carpeta" INTEGER NOT NULL,

    CONSTRAINT "Telefono_pkey" PRIMARY KEY ("carpeta")
);

-- CreateIndex
CREATE UNIQUE INDEX "PrismaDeudor_cedula_key" ON "PrismaDeudor"("cedula");

-- AddForeignKey
ALTER TABLE "PrismaCarpeta" ADD CONSTRAINT "PrismaCarpeta_carpeta_fkey" FOREIGN KEY ("carpeta") REFERENCES "PrismaDeudor"("numero") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Telefono" ADD CONSTRAINT "Telefono_carpeta_fkey" FOREIGN KEY ("carpeta") REFERENCES "PrismaDeudor"("numero") ON DELETE RESTRICT ON UPDATE CASCADE;
