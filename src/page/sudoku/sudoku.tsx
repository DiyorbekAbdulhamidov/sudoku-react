import { FunctionComponent } from "react";
import "./sudoku.scss";
import { Btns, Gamepad } from "../../components";

interface SudokuProps {

}

const Sudoku: FunctionComponent<SudokuProps> = () => {
  return (
    <section>
      <Gamepad></Gamepad>
      <Btns></Btns>
    </section>
  );
}

export default Sudoku;