import { useState } from "react";

import GameStatus from './model/gamestatus';
import Square from "./Square";


export default function Board() {
  const [gameStatus, setGameStatus] = useState(new GameStatus())

  function handleClick(i) {
    if (gameStatus.getValue(i) || gameStatus.getWinner()) {
      return;
    }

    const newStatus = gameStatus.makeMove(i);
    setGameStatus(newStatus);
  }

  function createRows() {
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
      return `Vencedor: ${winner}`;
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
