/*
  Warnings:

  - Added the required column `cantFilas` to the `Proceso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departamento` to the `Proceso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `despacho` to the `Proceso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `esPrivado` to the `Proceso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sujetosProcesales` to the `Proceso` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Departamento" AS ENUM ('BOGOTA', 'CUNDINAMARCA', 'META', 'ANTIOQUIA', 'ATLANTICO');

-- AlterTable
ALTER TABLE "Proceso" ADD COLUMN     "cantFilas" INTEGER NOT NULL,
ADD COLUMN     "departamento" "Departamento" NOT NULL,
ADD COLUMN     "despacho" TEXT NOT NULL,
ADD COLUMN     "esPrivado" BOOLEAN NOT NULL,
ADD COLUMN     "sujetosProcesales" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Demanda" (
    "departamento" "Departamento" NOT NULL,
    "capitalAdeudado" BIGINT NOT NULL,
    "entregaGarantiasAbogado" TIMESTAMP(3) NOT NULL,
    "etapaProcesal" TEXT NOT NULL,
    "fechaPresentacion" TIMESTAMP(3) NOT NULL,
    "municipio" TEXT NOT NULL,
    "obligacion" TEXT[],
    "radicado" TEXT NOT NULL,
    "vencimientoPagare" TIMESTAMP(3) NOT NULL,
    "expediente" TEXT NOT NULL,

    CONSTRAINT "Demanda_pkey" PRIMARY KEY ("expediente")
);

-- CreateTable
CREATE TABLE "Juzgado" (
    "id" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "demandaExpediente" TEXT,

    CONSTRAINT "Juzgado_pkey" PRIMARY KEY ("tipo")
);

-- CreateTable
CREATE TABLE "Actuacion" (
    "idRegActuacion" INTEGER NOT NULL,
    "llaveProceso" TEXT NOT NULL,
    "consActuacion" INTEGER NOT NULL,
    "fechaActuacion" TIMESTAMP(3) NOT NULL,
    "actuacion" TEXT NOT NULL,
    "anotacion" TEXT,
    "fechaInicial" TIMESTAMP(3),
    "fechaRegistro" TIMESTAMP(3) NOT NULL,
    "fechaFinal" TIMESTAMP(3),
    "codRegla" TEXT NOT NULL,
    "conDocumentos" BOOLEAN NOT NULL,
    "can" INTEGER NOT NULL,

    CONSTRAINT "Actuacion_pkey" PRIMARY KEY ("llaveProceso")
);

-- CreateIndex
CREATE UNIQUE INDEX "Demanda_radicado_key" ON "Demanda"("radicado");

-- CreateIndex
CREATE UNIQUE INDEX "Actuacion_idRegActuacion_key" ON "Actuacion"("idRegActuacion");

-- AddForeignKey
ALTER TABLE "Proceso" ADD CONSTRAINT "Proceso_despacho_fkey" FOREIGN KEY ("despacho") REFERENCES "Juzgado"("tipo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Demanda" ADD CONSTRAINT "Demanda_expediente_fkey" FOREIGN KEY ("expediente") REFERENCES "Proceso"("llaveProceso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Juzgado" ADD CONSTRAINT "Juzgado_demandaExpediente_fkey" FOREIGN KEY ("demandaExpediente") REFERENCES "Demanda"("expediente") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actuacion" ADD CONSTRAINT "Actuacion_llaveProceso_fkey" FOREIGN KEY ("llaveProceso") REFERENCES "Proceso"("llaveProceso") ON DELETE RESTRICT ON UPDATE CASCADE;
