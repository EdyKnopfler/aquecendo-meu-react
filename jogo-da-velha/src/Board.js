import { useState } from "react";
import Square from "./Square";


export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    // Imutabilidade:
    // Setar um novo array torna fácil para o React identificar se o elemento mudou
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let gameStatus;
  if (winner) {
    gameStatus = `Vencedor: ${winner}`;
  } else {
    gameStatus = `Próximo: ${xIsNext ? 'X' : 'O'}`;
  }

  const rows = [];

  for (let row = 0; row < 3; row++) {
    const cols = [];

    for (let col = 0; col < 3; col++) {
      const idx = row * 3 + col;
      cols.push(
        <Square key={idx} value={squares[idx]} onSquareClick={() => handleClick(idx)} />
      );
    }

    rows.push(
      <div className="board-row" key={row}>
        {cols}
      </div>
    );
  }

  return (
    <>
      <div className="status">{gameStatus}</div>
      {rows}
    </>
  );
}

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function calculateWinner(squares) {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    const [a, b, c] = WINNING_LINES[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}