import { useState } from 'react';

import GameStatus from '../model/gamestatus';
import Board from "./Board";

export default function Game() {
  // Histórico inicial: um tabuleiro zeradinho
  const [history, setHistory] = useState([new GameStatus()]);
  const [currentMove, setCurrentMove] = useState(0);

  function handlePlay(newStatus) {
    setHistory([...history.slice(0, currentMove + 1), newStatus]);
    setCurrentMove(currentMove + 1);
  }

  function jumpTo(moveIdx) {
    setCurrentMove(moveIdx);
  }

  const currentStatus = history[currentMove];

  const moves = history.map((status, move) => {
    const description = move > 0 ? 'Movimento #' + move : 'Início';
    return (
      <li key={move}>
        <button 
          onClick={() => jumpTo(move)}
          className={move == currentMove ? 'currentMove' : (move > currentMove ? 'futureMove' : '')}
        >{description}</button>
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