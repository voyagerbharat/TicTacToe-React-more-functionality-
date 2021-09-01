import React from 'react';
import Square from './Square';

const Board = ({ board, handleSquareClick, winningSquare }) => {
  const renderSquare = position => {
    const isWinningSquare = winningSquare.includes(position);
    return (
      <Square
        value={board[position]} // board[position] stores the state value
        boomClick={() => handleSquareClick(position)} // boomclick is function that is exectued when button is clicked
        isWinningSquare={isWinningSquare}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
