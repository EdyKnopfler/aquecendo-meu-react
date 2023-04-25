import { useState } from 'react';

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(
    initialList
  );

  function handleToggleMyList(artworkId, nextSeen) {  
    // ERRADO: modificar o objeto no array
    // Pode ser feito assim com o useImmer! :)

    /*    
    // Copiei, blz
    const myNextList = [...myList];

    // Encontrei o objeto
    const artwork = myNextList.find(
      a => a.id === artworkId
    );

    // Modifiquei o objeto a que o array aponta!
    artwork.seen = nextSeen;
    setMyList(myNextList);

    Caso já soubesse a posição, equivaleria a fazer:
    myNextList[position].seen = nextSeen;  // ERRADO!
    */

    // CORRETO: criar um objeto novo na posição
    // O uso do map facilita neste caso por termos que varrer o array;
    // se já soubéssemos a posição de antemão equivaleria a fazer:
    // myNextList[position] = { ...artwork, seen: nextSeen };  // OK!

    setMyList(myList.map(artwork => {
      if (artwork.id === artworkId) {
        // Na posição marcada criamos um novo
        return { ...artwork, seen: nextSeen };
      } else {
        // Nas outras, continua o mesmo
        return artwork;
      }
    }));
  }

  function handleToggleYourList(artworkId, nextSeen) {
    // Mesma coisa aqui
    setYourList(yourList.map(artwork => {
      if (artwork.id === artworkId) {
        return { ...artwork, seen: nextSeen };
      } else {
        return artwork;
      }
    }));
  }

  return (
    <div className="artBucket">
      <div className="itemList">
        <h2>My list of art to see:</h2>
        <ItemList
          artworks={myList}
          onToggle={handleToggleMyList} />
      </div>
      <div className="itemList">
        <h2>Your list of art to see:</h2>
        <ItemList
          artworks={yourList}
          onToggle={handleToggleYourList} />
      </div>
    </div>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
