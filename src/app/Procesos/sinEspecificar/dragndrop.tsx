export function DragNDrop() {
  return (
    <>
      {' '}
      <div
        draggable={true}
        onDragStart={(
          e 
        ) => {
          return console.log(
            'onDragStart' 
          );
        }}
        onDragEnd={(
          e 
        ) => {
          return console.log(
            'onDragEnd' 
          );
        }}
      >
        Drag source
      </div>
      <div
        onDragEnter={(
          e 
        ) => {
          return console.log(
            'onDragEnter' 
          );
        }}
        onDragLeave={(
          e 
        ) => {
          return console.log(
            'onDragLeave' 
          );
        }}
        onDragOver={(
          e 
        ) => {
          e.preventDefault();
          console.log(
            'onDragOver' 
          );
        }}
        onDrop={(
          e 
        ) => {
          return console.log(
            'onDrop' 
          );
        }}
      >
        Drop target
      </div>
    </>
  );
}
