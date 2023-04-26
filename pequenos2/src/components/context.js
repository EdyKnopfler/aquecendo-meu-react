import { createContext } from "react";
import { useContext } from "react";

// Contexto: permite passar dados para baixo vários níveis na árvore
// Argumento: valor default
export const LevelContext = createContext(1);

export default function Page() {
  // Os Headings devem respeitar o nível no Section logo acima na árvore.
  // Os <div> foram introduzidos para criar ruído, distanciando os Headings
  // dos Sections correspondentes!
  
  // Obs.: o último Section não informa level, veja mais adiante o tratamento

  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <div>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
        </div>
        <Section level={3}>
          <div>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
          </div>
          <Section>
            <div>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </div>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

function Section({ level, children }) {
  // Como default, tentamos usar o do Section pai incrementado
  const currentLevel = useContext(LevelContext);
  const useLevel = level || currentLevel + 1;

  // O Section provê o contexto...
  return (
    <section className="section">
      <LevelContext.Provider value={useLevel}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}

function Heading({ children }) {
  // ... e o Heading usa!
  const level = useContext(LevelContext);

  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}