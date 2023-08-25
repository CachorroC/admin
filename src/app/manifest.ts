import { MetadataRoute } from 'next';
import styles from '#@/styles/variables.module.scss';

export default function manifest (): MetadataRoute.Manifest {
  const manFest: MetadataRoute.Manifest = {
    name            : 'R&S Asesoría Jurídica S.A.S',
    short_name      : 'RyS',
    background_color: styles.backgroundColor
  };

  return manFest;
}