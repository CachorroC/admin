-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Reintegra', 'Insolvencia', 'LiosJuridicos', 'Bancolombia', 'Terminados', 'todo');

-- CreateEnum
CREATE TYPE "TipoProceso" AS ENUM ('PRENDARIO', 'SINGULAR', 'HIPOTECARIO');

-- CreateTable
CREATE TABLE "IntCarpeta" (
    "capitalAdeudaro" INTEGER NOT NULL,
    "numero" SERIAL NOT NULL,
    "idProceso" BIGINT,
    "id" BIGINT NOT NULL,
    "tipoProceso" "TipoProceso" NOT NULL DEFAULT 'SINGULAR',
    "category" "Category" NOT NULL DEFAULT 'todo',
    "llaveProceso" TEXT NOT NULL,
    "fecha" TIMESTAMP(3),

    CONSTRAINT "IntCarpeta_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "Demanda" (
    "expediente" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "radicado" TEXT NOT NULL,
    "entregaGarantiasAbogado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vencimientoPagare" TIMESTAMP(3),
    "obligacion" TEXT[],
    "etapaProcesal" TEXT,

    CONSTRAINT "Demanda_pkey" PRIMARY KEY ("expediente")
);

-- CreateTable
CREATE TABLE "Juzgado" (
    "id" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "demandaExpediente" TEXT,

    CONSTRAINT "Juzgado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deudor" (
    "cedula" BIGINT NOT NULL,
    "email" TEXT,
    "primerNombre" TEXT NOT NULL,
    "segundoNombre" TEXT,
    "primerApellido" TEXT NOT NULL,
    "segundoApellido" TEXT,
    "direccion" TEXT,
    "tel" INTEGER[],

    CONSTRAINT "Deudor_pkey" PRIMARY KEY ("cedula")
);

-- CreateIndex
CREATE UNIQUE INDEX "IntCarpeta_idProceso_key" ON "IntCarpeta"("idProceso");

-- CreateIndex
CREATE UNIQUE INDEX "Deudor_cedula_key" ON "Deudor"("cedula");

-- AddForeignKey
ALTER TABLE "IntCarpeta" ADD CONSTRAINT "IntCarpeta_id_fkey" FOREIGN KEY ("id") REFERENCES "Deudor"("cedula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntCarpeta" ADD CONSTRAINT "IntCarpeta_llaveProceso_fkey" FOREIGN KEY ("llaveProceso") REFERENCES "Demanda"("expediente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Juzgado" ADD CONSTRAINT "Juzgado_demandaExpediente_fkey" FOREIGN KEY ("demandaExpediente") REFERENCES "Demanda"("expediente") ON DELETE SET NULL ON UPDATE CASCADE;
