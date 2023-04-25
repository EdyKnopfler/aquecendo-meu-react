
import Square from "./Square";

export default function Board({gameStatus, onPlay}) {
  function handleClick(idx) {
    if (gameStatus.getValue(idx) || gameStatus.getWinner()) {
      return;
    }

    const newStatus = gameStatus.makeMove(idx);
    onPlay(newStatus);
  }

  function createRows() {
    // Tavez isto tenha ficado mais feio que fazer hardcoded,
    // mas como exercício foi legal.
    const rows = [];

    for (let row = 0; row < 3; row++) {
      const cols = [];
  
      for (let col = 0; col < 3; col++) {
        const idx = row * 3 + col;
        cols.push(
          <Square
            key={idx}
            value={gameStatus.getValue(idx)}
            onSquareClick={() => handleClick(idx)}
            />
        );
      }
  
      rows.push(
        <div className="board-row" key={row}>
          {cols}
        </div>
      );
    }

    return rows;
  }

  function statusMessage() {
    const winner = gameStatus.getWinner();
    
    if (winner) {
      return winner == 'Draw' ? 'Deu velha!' : `Vencedor: ${winner}`;
    } else {
      return `Próximo: ${gameStatus.getCurrent()}`;
    }
  }

  return (
    <>
      <div className="status">{statusMessage()}</div>
      {createRows()}
    </>
  );
}
