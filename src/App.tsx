import React, { useState } from 'react';
import './app.scss';

function App() {
  const sudokuGrid: (number | null)[][] = [
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
  ];

  const [selectedCell, setSelectedCell] = useState<[number, number]>([-1, -1]);

  const renderGrid = () => {
    return sudokuGrid.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, cellIndex) => {
          const isActive =
            cellIndex === selectedCell[1] || rowIndex === selectedCell[0] ||
            (Math.floor(cellIndex / 3) === Math.floor(selectedCell[1] / 3) &&
              Math.floor(rowIndex / 3) === Math.floor(selectedCell[0] / 3));
          return (
            <div
              key={cellIndex}
              className={`cell ${isActive ? 'active' : ''}`}
              onClick={() => handleCellClick(rowIndex, cellIndex)}
            >
              {cell}
            </div>
          );
        })}
      </div>
    ));
  };

  const handleCellClick = (rowIndex: number, cellIndex: number) => {
    setSelectedCell([rowIndex, cellIndex]);
  };

  return <div className="App">{renderGrid()}</div>;
}

export default App;