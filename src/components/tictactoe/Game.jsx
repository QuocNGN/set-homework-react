import { useState } from 'react';
import Board from './Board';
import '../../assets/css/GameStyle.css';
import { CalculateWinner } from '../../utils/helpers';

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = CalculateWinner(board);

  function handleOnClick(index) {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) {
      return;
    }

    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  }

  function handleResetGame() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div>
      <Board cells={board} onClick={handleOnClick} />
      {winner && <div className='game-winner'>{`Winner is ${winner}`}</div>}
      <button onClick={handleResetGame} className='game-reset'>
        Reset Game
      </button>
    </div>
  );
}

export default Game;
