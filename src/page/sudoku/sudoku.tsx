import { FunctionComponent } from "react";
import { Btns, Gamepad } from "../../components";
import "./sudoku.scss";


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