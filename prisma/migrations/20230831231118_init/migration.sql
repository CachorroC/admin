/*
  Warnings:

  - The primary key for the `Actuacion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Proceso` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `idProceso` to the `Actuacion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Actuacion" DROP CONSTRAINT "Actuacion_llaveProceso_fkey";

-- DropForeignKey
ALTER TABLE "Demanda" DROP CONSTRAINT "Demanda_expediente_fkey";

-- DropIndex
DROP INDEX "Actuacion_idRegActuacion_key";

-- DropIndex
DROP INDEX "Proceso_idProceso_key";

-- AlterTable
ALTER TABLE "Actuacion" DROP CONSTRAINT "Actuacion_pkey",
ADD COLUMN     "idProceso" BIGINT NOT NULL,
ADD CONSTRAINT "Actuacion_pkey" PRIMARY KEY ("idProceso");

-- AlterTable
ALTER TABLE "Proceso" DROP CONSTRAINT "Proceso_pkey",
ADD CONSTRAINT "Proceso_pkey" PRIMARY KEY ("idProceso");

-- CreateTable
CREATE TABLE "_DemandaToProceso" (
    "A" TEXT NOT NULL,
    "B" BIGINT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DemandaToProceso_AB_unique" ON "_DemandaToProceso"("A", "B");

-- CreateIndex
CREATE INDEX "_DemandaToProceso_B_index" ON "_DemandaToProceso"("B");

-- AddForeignKey
ALTER TABLE "Actuacion" ADD CONSTRAINT "Actuacion_idProceso_fkey" FOREIGN KEY ("idProceso") REFERENCES "Proceso"("idProceso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DemandaToProceso" ADD CONSTRAINT "_DemandaToProceso_A_fkey" FOREIGN KEY ("A") REFERENCES "Demanda"("expediente") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DemandaToProceso" ADD CONSTRAINT "_DemandaToProceso_B_fkey" FOREIGN KEY ("B") REFERENCES "Proceso"("idProceso") ON DELETE CASCADE ON UPDATE CASCADE;
