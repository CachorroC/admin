-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Terminados', 'LiosJuridicos', 'Bancolombia', 'Reintegra', 'Insolvencia');

-- CreateEnum
CREATE TYPE "TipoProceso" AS ENUM ('HIPOTECARIO', 'PRENDARIO', 'SINGULAR', 'ACUMULADO');

-- CreateTable
CREATE TABLE "PrismaDeudor" (
    "id" TEXT NOT NULL,
    "primerNombre" TEXT NOT NULL,
    "primerApellido" TEXT NOT NULL,
    "direccion" TEXT,
    "email" TEXT,
    "segundoApellido" TEXT,
    "segundoNombre" TEXT,

    CONSTRAINT "PrismaDeudor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrismaCarpeta" (
    "id" SERIAL NOT NULL,
    "category" "Category" NOT NULL DEFAULT 'Bancolombia',
    "tipoProceso" "TipoProceso" NOT NULL,
    "cedula" TEXT NOT NULL,
    "idProceso" INTEGER NOT NULL,

    CONSTRAINT "PrismaCarpeta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PrismaDeudor_id_key" ON "PrismaDeudor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PrismaCarpeta_idProceso_key" ON "PrismaCarpeta"("idProceso");

-- AddForeignKey
ALTER TABLE "PrismaCarpeta" ADD CONSTRAINT "PrismaCarpeta_cedula_fkey" FOREIGN KEY ("cedula") REFERENCES "PrismaDeudor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
