import { useState } from 'react';

// A prop "children" recebe o texto interno!
function Panel({title, children, isActive, onShow}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      
      {isActive  // que condicional estilosa
        ? <p>{children}</p>
        : <button onClick={onShow}>Mostrar</button>
      }
    </section>
  );
}

export default function Accordion() {
  // Exibindo um painel por vez:
  // * não adianta cada painel controlar seu estado
  // * controlamos no pai e passamos para o filho (isActive)
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Perceba que o Panel não especifica children="..."
  // Aqui está tudo hardcoded; os painéis poderiam ter sido
  // gerados em um loop a partir de dados
  return (
    <>
      <h2>Scania</h2>
      <Panel
        title="Gato"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Cheio de personalidade, com cara blasé e exigente,
        quer comida e água do seu jeito e usar seu humano de
        encosto quando bem entender. Adora sachê.
      </Panel>
      <h2>Tom</h2>
      <Panel
        title="Gato"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Gordinho e com cara de besta, é muito peludo e o
        preferido das mulheres. Não corre atrás da caça,
        deita e espera ela chegar. Pede comida na cama para
        evitar a fadiga.
      </Panel>
      <h2>Pandora</h2>
      <Panel
        title="Gato"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        Filhotinha serelepe, sapeca, muito sociável e
        carinhosa. Está aprendendo todos os costumes do
        Scania, como beber água na torneira e pedir sachê
        quando o humano abre a geladeira.
      </Panel>
      <h2>Ramona</h2>
      <Panel
        title="Cachorro"
        isActive={activeIndex === 3}
        onShow={() => setActiveIndex(3)}
      >
        Cadela gordinha, carinhosa e comilona, pertence à
        Andréia (mas não por muito tempo pois estou bolando
        um plano infalível para pegá-la para mim). É toda
        carinho até com o carteiro e seca tudo que a Andréia
        come.
      </Panel>
    </>
  );
}