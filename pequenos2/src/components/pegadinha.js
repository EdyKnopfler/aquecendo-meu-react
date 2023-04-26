import { useState } from 'react';

export default function Picture() {
  const [pictureActive, setPictureActive] = useState(false);
  return (
    <div 
      className={'background' +
        (!pictureActive ? ' background--active' : '')}
      onClick={() => setPictureActive(false)}
    >
      <img
        className={'picture' + 
          (pictureActive ? ' picture--active' : '')}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={(e) => {
          // PEGADINHA!
          // Clique na div (externa) e na imagem (interna)
          // Requer parar a propagação do evento
          e.stopPropagation();
          setPictureActive(true);
        }}
      />
    </div>
  );
}
