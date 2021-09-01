import React from 'react';

const Square = ({ value, boomClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      onClick={boomClick}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
      className={`square ${isWinningSquare ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
    >
      {value}
    </button>
  );
};

export default Square;
