import React, { useState, useEffect } from 'react';
import './gamepad.scss';

export function Gamepad() {
  const initialGrid: (number | null)[][] = [
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

  const [sudokuGrid, setSudokuGrid] = useState<(number | null)[][]>(initialGrid);
  const [selectedCell, setSelectedCell] = useState<[number, number]>([-1, -1]);

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  const generateRandomNumbers = () => {
    const newGrid: (number | null)[][] = JSON.parse(JSON.stringify(initialGrid));
    for (let i = 0; i < 30; i++) {
      const randomRowIndex = Math.floor(Math.random() * 9);
      const randomCellIndex = Math.floor(Math.random() * 9);
      newGrid[randomRowIndex][randomCellIndex] = Math.floor(Math.random() * 9) + 1;
    }
    setSudokuGrid(newGrid);
  };

  const renderGrid = () => {
    return sudokuGrid.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, cellIndex) => {
          const isActive =
            cellIndex === selectedCell[1] ||
            rowIndex === selectedCell[0] ||
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

  return (
    <div>
      <div className="gamepad">{renderGrid()}</div>
    </div>
  );
}