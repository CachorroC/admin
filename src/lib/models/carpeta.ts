
export interface IntCarpetaRaw {
    _id:             string;
    idProceso:       number;
    llaveProceso:    string;
    capitalAdeudado: number | string;
    demanda:         DemandaRaw;
    deudor:          DeudorRaw;
    grupo:           GrupoRaw;
    id:              number | string;
    numero:          number | string;
    tipoProceso:     TipoProcesoRaw | null;
    fecha?:          Date;
}

export interface DemandaRaw {
    ciudad:                  null | string;
    departamento:            DepartamentoRaw | null;
    entregaGarantiasAbogado: Date;
    etapaProcesal:           null | string;
    juzgado:                 JuzgadoRaw[];
    obligacion:              Array<number | string> | null;
    radicado:                number | null | string;
    vencimientoPagare:       Date;
}

export type DepartamentoRaw = 'CUNDINAMARCA' | 'BOYACÁ' | 'TOLIMA';

export interface JuzgadoRaw {
    id:   number | string;
    tipo: string;
    url:  string;
}

export interface DeudorRaw {
    cedula:          number | string;
    primerNombre:    string;
    segundoNombre:   null | string;
    primerApellido:  string;
    segundoApellido: null | string;
    tel:             Tel;
    email:           null | string;
    direccion:       null | string;
}

export interface Tel {
    celular: number;
    fijo:    number;
}

export type GrupoRaw = 'Reintegra' | 'Insolvencia' | 'Bancolombia' | 'LiosJuridicos' | 'Lios Juridicos';

export type TipoProcesoRaw = 'PRENDARIO' | 'SINGULAR' | 'HIPOTECARIO' | 'HMM PISO 1';


export interface IntCarpeta {
    _id:             string;
    idProceso:       number;
    llaveProceso:    string;
    capitalAdeudado: number ;
    demanda:         intDemanda;
    deudor:          intDeudor;
    grupo:           Grupo;
    id:              number;
    numero:          number;
    tipoProceso:     TipoProceso;
    fecha?:          Date;
}

export interface intDemanda {
    ciudad:                  null | string;
    departamento:            Departamento | null;
    entregaGarantiasAbogado: Date;
    etapaProcesal:           null | string;
    juzgado:                 Juzgado[];
    obligacion:              Array<number | string> | null;
    radicado:                number | null | string;
    vencimientoPagare:       Date;
}

export type Departamento = 'CUNDINAMARCA' |'AMAZONAS'|'ANTIOQUIA'|'ARAUCA'|'ATLANTICO'|'BOLIVAR'|'BOYACA'|'CALDAS'|'CAQUETA'|'CASANARE'|'CAUCA'|'CESAR'|'CHOCO'|'CORDOBA'|'BOGOTA'|'GUAINIA'|'GUAVIARE'|'HUILA'|'LA GUAJIRA'|'MAGDALENA'|'META'|'NARIÑO'|'NORTE DE SANTANDER'|'PUTUMAYO'|'QUINDIO'|'RISARALDA'|'SAN ANDRES Y PROVIDENCIA'|'SANTANDER'|'SUCRE'|'TOLIMA'|'VALLE DEL CAUCA'|'VAUPES'|'VICHADA'

export interface Juzgado {
    id:   number | string;
    tipo: string;
    url:  string;
}

export interface intDeudor {
    cedula:          number ;
    primerNombre:    string;
    segundoNombre:   null | string;
    primerApellido:  string;
    segundoApellido: null | string;
    tel:             Tel;
    email:           null | string;
    direccion:       null | string;
}

export interface Tel {
    celular: number;
    fijo:    number;
}

export type Grupo = 'Reintegra' | 'Insolvencia' | 'Bancolombia' | 'LiosJuridicos' | 'Lios Juridicos';

export type TipoProceso = 'PRENDARIO' | 'SINGULAR' | 'HIPOTECARIO';

class Deudor implements intDeudor{
  cedula: number;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  email: any;
  direccion: any;
  tel: { fijo: number; celular: number; };
  constructor (
    tel = {
      fijo   : 0,
      celular: 0
    }, cedula = 0, primerNombre = '', primerApellido= '', segundoNombre = '', segundoApellido = '', email?, direccion?
  ) {
    this.cedula = cedula;
    this.primerNombre = primerNombre;
    this.segundoNombre = segundoNombre;
    this.primerApellido = primerApellido;
    this.segundoApellido = segundoApellido;
    this.email = email;
    this.direccion = direccion;
    this.tel = tel;
  }


  get nombre() {
    return (
      this.primerNombre
            + ' '
            + this.segundoNombre
          ?? ' '
            + ' '
            + this.primerApellido
            + this.segundoApellido
          ?? ' '
    );
  }
}