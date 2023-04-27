/*
  Para o React, o que importa é a árvore de elementos retornada:
  * mesmo componente na mesma posição: preserva estado
  * componente diferente ou é excluído: estado é removido
  
  Implicação: não importa se há um condicional escolhendo entre
  duas árvores caso elas tenham estrutura idêntica.
  
  Neste exemplo:

  [x] Renderizar o segundo contador
  
  Quando desmarcamos, o estado é destruído. Ao marcar novamente,
  o componente é recriado com valor 0 no contador.
*/

import { useState } from 'react';

export default function Tree() {
  // O segundo counter é exibido condicionalmente, i.e., pode
  // ser removido entre re-renderizações
  const [showB, setShowB] = useState(true);
  return (
    <>
      <h1>Position in tree</h1>
      <div>
        <Counter />
        {showB && <Counter />} 
        <label>
          <input
            type="checkbox"
            checked={showB}
            onChange={e => {
              setShowB(e.target.checked)
            }}
          />
          Render the second counter
        </label>
      </div>
    </>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';

  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
