'use client';
import styles from './carpetas.module.scss';
import {intDemanda,
  monCarpetaDemandado,} from '#@/lib/types/demandados';
import typography from '#@/styles/fonts/typography.module.scss';
import Link from 'next/link';
import type { Route } from 'next';
import { usePathname } from 'next/navigation';
import { fixFechas } from '#@/lib/fix';

export const DemandaContainer = ({demanda,}: {
  demanda: intDemanda;
}) => {
  const {
    Departamento,
    Municipio,
    VencimientoPagare,
    EntregadeGarantiasAbogado,
    Radicado,
    CapitalAdeudado,
    Proceso,
    Ubicacion,
    Juzgado,
    Obligacion,
  } = demanda;
  return (
    <div className={styles.section}>
      {' '}
      <h1 className={typography.headlineMedium}>
        {' '}
        {Radicado}{' '}
      </h1>{' '}
      <h2
        className={
          typography.titleMedium
        }>{`${ Departamento }: ${ Municipio }`}</h2>{' '}
      {VencimientoPagare && (
        <p className={typography.labelMedium}>
          {' '}
          {fixFechas (VencimientoPagare)}{' '}
        </p>
      )}{' '}
      {EntregadeGarantiasAbogado && (
        <p className={typography.labelSmall}>
          {' '}
          {fixFechas (
            EntregadeGarantiasAbogado
          )}{' '}
        </p>
      )}{' '}
      {CapitalAdeudado && (
        <p className={typography.labelSmall}>
          {' '}
          {CapitalAdeudado}{' '}
        </p>
      )}{' '}
    </div>
  );
};

export const CarpetaCard = ({Carpeta,}: {
  Carpeta: monCarpetaDemandado;
}) => {
  const pathname = usePathname ();

  const {
    llaveProceso,
    idProceso,
    Deudor,
    _id,
    Demanda,
  } = Carpeta;

  const {
    Nombre, Tel, Direccion, Email 
  } =
    Deudor;

  const path = '/Procesos';

  const href = (
    llaveProceso
      ? idProceso
        ? `${ path }/${ llaveProceso }/${ idProceso }`
        : `${ path }/${ llaveProceso }`
      : `${ path }`
  ) as Route;

  const isActive =
    pathname === href ||
    pathname ===
      `${ path }/${ llaveProceso }/${ idProceso }` ||
    pathname === `${ path }/${ llaveProceso }` ||
    pathname === path;
  return (
    <>
      {' '}
      <DemandaContainer demanda={Demanda} />{' '}
      <div
        className={styles.container}
        key={_id}>
        {' '}
        <div
          className={
            isActive
              ? styles.cardActive
              : styles.cardInactive
          }>
          {' '}
          <h1
            className={`${ typography.titleMedium } ${ styles.title }`}>
            {' '}
            {Nombre}{' '}
          </h1>{' '}
          <p className={styles.content}>
            {' '}
            {Direccion}{' '}
          </p>{' '}
          <div className={styles.links}>
            {' '}
            <Link
              className={styles.button}
              href={href}>
              {' '}
              <span
                className={`material-symbols-outlined ${ styles.icon }`}>
                {' '}
                folder_open{' '}
              </span>{' '}
              <span
                className={styles.tooltiptext}>
                {' '}
                Abrir{' '}
              </span>{' '}
            </Link>{' '}
            {Tel && Tel.Celular && (
              <Link
                className={styles.button}
                href={`tel:${ Tel.Celular }`}>
                {' '}
                <span
                  className={`material-symbols-outlined ${ styles.icon }`}>
                  {' '}
                  phone_iphone{' '}
                </span>{' '}
                <span
                  className={styles.tooltiptext}>
                  {' '}
                  Numero Celular{' '}
                </span>{' '}
              </Link>
            )}{' '}
            {Email && (
              <Link
                className={styles.button}
                href={`mailto:${ Email }`}>
                {' '}
                <span
                  className={`material-symbols-outlined ${ styles.icon }`}>
                  {' '}
                  forward_to_inbox{' '}
                </span>{' '}
                <span
                  className={styles.tooltiptext}>
                  {' '}
                  Email{' '}
                </span>{' '}
              </Link>
            )}{' '}
            {Tel && Tel.Fijo && (
              <Link
                className={styles.button}
                href={`tel:${ Tel.Fijo }`}>
                {' '}
                <span
                  className={`material-symbols-outlined ${ styles.icon }`}>
                  {' '}
                  call{' '}
                </span>{' '}
                <span
                  className={styles.tooltiptext}>
                  {' '}
                  Numero Fijo{' '}
                </span>{' '}
              </Link>
            )}{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </>
  );
};
