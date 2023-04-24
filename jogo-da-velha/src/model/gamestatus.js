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

const X = 'X', O = 'O';

export default class GameStatus {

  constructor(squares, current) {
    this.squares = squares || Array(9).fill(null);
    this.current = current || X;
    this.winner = this.calculateWinner();
  }

  getCurrent() {
    return this.current;
  }

  getValue(idx) {
    return this.squares[idx];
  }

  getWinner() {
    return this.winner;
  }

  makeMove(idx) {
    if (this.winner) {
      throw new Error('Jogo já se encerrou');
    }

    if (this.squares[idx]) {
      throw new Error('Posição ocupada');
    }

    // Imutabilidade:
    // Criar um novo objeto ao invés de alterar torna fácil para o React
    // identificar se o elemento mudou
    const newSquares = this.squares.slice();
    newSquares[idx] = this.current;
    const newCurrent = this.current === X ? O : X;
    return new GameStatus(newSquares, newCurrent);
  }

  calculateWinner() {
    const squares = this.squares;

    for (let i = 0; i < WINNING_LINES.length; i++) {
      const [a, b, c] = WINNING_LINES[i];
  
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  
    return null;
  }

}