// npm install use-immer
import { useImmer } from 'use-immer';

export default function FormWithImmer() {
  // Um atualizador de estado que aceita uma escrita "procedural"
  const [person, updatePerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  /*
    Exemplo:

    updatePerson(draft => {
      draft.name = ...;
      draft.artwork.city = ...;
    });

    A vantagem é poder escrever agoritmos mais convencionais, usando
    operações mutáveis.

    Draft = Rascunho
  */

  return (
    <>
      <div className="formField">
        <label>Name:</label>
        <input
          value={person.name}
          onChange={(e) => updatePerson(draft => {draft.name = e.target.value})}
        />
      </div>
      <div className="formField">
        <label>Title:</label>
        <input
          value={person.artwork.title}
          onChange={(e) => updatePerson(draft => {draft.artwork.title = e.target.value})}
        />
      </div>
      <div className="formField">
        <label>City:</label>
        <input
          value={person.artwork.city}
          onChange={(e) => updatePerson(draft => {draft.artwork.city = e.target.value})}
        />
      </div>
      <div className="formField">
        <label>Image:</label>
        <input
          value={person.artwork.image}
          onChange={(e) => updatePerson(draft => {draft.artwork.image = e.target.value})}
        />
      </div>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  );
}
