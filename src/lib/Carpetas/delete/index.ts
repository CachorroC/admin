import { carpetasCollection } from '..';

export async function deleteTerminados() {
  const collection = await carpetasCollection();

  const deleteTerminadoCarpetas
    = await collection.deleteMany(
      {
        grupo: 'terminados' 
      } 
    );

  return deleteTerminadoCarpetas;
}

deleteTerminados()
  .then(
    (
      ff 
    ) => {
      console.log(
        ff 
      );
    },
    (
      rr 
    ) => {
      console.log(
        rr 
      );
    }
  );

console.log(
  deleteTerminados() 
);
