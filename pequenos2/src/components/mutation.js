import { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <>
      <h1>Updating objects</h1>
      <div
        onPointerMove={e => {
          if (e.target.style.position === 'absolute') {
              // Pegou na bolinha!
              return;
          }

          const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
          const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

          // Atualização de objetos: crie um novo, ou copie e modifique a cópia
          // Regra também vale para arrays: atenção às operações que mudam o array!
          setPosition({
            // Aproveitando para exercitar os cálculos...
            x: e.clientX + scrollLeft - e.target.offsetLeft,
            y: e.clientY + scrollTop - e.target.offsetTop
          });
          
          console.log(e)

          /* NÃO FUNCIONAM:
              position.x = ...;
              position.y = ...;
            Após o tratador de evento finalizar, o componente será re-renderizado
            com o valor anterior.
          */
        }}
        style={{
          position: 'relative',
          width: '800px',
          height: '200px',
          background: 'wheat'
        }}>
        <div style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: '-10px',
          top: '-10px',
          width: '20px',
          height: '20px',
        }} />
      </div>
    </>
  );
}
