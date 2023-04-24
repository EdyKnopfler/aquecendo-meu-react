import { useState } from 'react';

import GameStatus from '../model/gamestatus';
import Board from "./Board";

export default function Game() {
  // Histórico inicial: um tabuleiro zeradinho
  const [history, setHistory] = useState([new GameStatus()]);

  function handlePlay(newStatus) {
    setHistory([...history, newStatus]);
  }

  function jumpTo(moveIdx) {
    setHistory(history.slice(0, moveIdx+1))
  }

  const currentStatus = history[history.length - 1];

  const moves = history.map((status, move) => {
    const description = 'Vá para ' + (move > 0 ? 'movimento #' + move : 'o início');
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board gameStatus={currentStatus} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}