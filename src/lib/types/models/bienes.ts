import { Avaluo, Demanda } from '../demandados';

export class Vehiculo {
  placa: string; //* zzy-059
  avaluo: Avaluo;
  registriSim: number;
  partesYcomparendos: string | string[];
  parqueadero: string;
  demanda: any;
  name: string;
  price: number;
  constructor (
    {
      placa,
      registroSim, partesYcomparendos, avaluo, parqueadero, demanda, price, name
    }: {
        placa: string;
        registroSim: number; partesYcomparendos: string | string[]; avaluo: Avaluo; parqueadero: string; demanda: Demanda; name: string; price: number;
      }
  ) {
    this.placa = placa;
    this.avaluo = avaluo;
    this.registriSim = registroSim;
    this.partesYcomparendos = partesYcomparendos;
    this.parqueadero = parqueadero;
    this.demanda = demanda;
    this.price = price;
    this.name = name;

  }
  get carname() {
    return this.name;
  }
  get
  set carname(x) {
    this._carname = x;
  }

  showPrice () {
    const precioEnCop = this.price.toLocaleString(
      'es-CO',
      {
        currency: 'COP',
        style   : 'currency'
      }
    );
    alert(
      precioEnCop
    );

    return precioEnCop;
  }
}


export class Inmueble {
  administracion: number;
  direccion: string;
  parqueadero: boolean;
  secuestre: any;
  constructor (
    {
      direccion, administracion, parqueadero, secuestre
    }: { direccion: string; administracion: number; parqueadero: boolean; }
  ) {
    this.direccion = direccion;
    this.administracion = administracion;
    this.parqueadero = parqueadero;
    this.secuestre = secuestre;
  }
}
