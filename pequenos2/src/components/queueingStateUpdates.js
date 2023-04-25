import { useState } from 'react';

/*
 Dado number = 1
 Se fizermos:

 setNumber(number + 1);
 setNumber(number + 1);
 setNumber(number + 1);

 Serão enfileirados 3 setNumber(2) para o próximo re-render!

 É um caso de uso incomum, mas podemos passar uma função
 para o atualizador de estado a cada vez trabalhar com o
 valor anterior (durante o processamento da fila).

 Todos os atualizadores são processados APÓS o tratadr de
 evento!
*/ 

export default function QueueingStateUpdates() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1);  // Função
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}