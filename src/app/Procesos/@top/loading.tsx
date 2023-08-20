import typography from '#@/styles/fonts/typography.module.css';
import { Loader } from '#@/components/Loader';

export default function Loading () {
  return (
    <>
      <h1 className={typography.displayLarge}>
        Cargando
      </h1>
      <Loader key={1}/>
      <Loader key={2}/>
      <Loader key={3}/>
      <Loader key={4}/>
      <Loader key={5}/>
      <Loader key={6}/>


    </>
  );
}