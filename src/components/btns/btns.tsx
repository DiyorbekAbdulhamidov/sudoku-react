import React, { useState } from 'react';
import './btns.scss';

export function Btns() {
  return <div className="btns">
    <div className='assets'>

      <div className='otmenit'>
        <span className="material-symbols-outlined">undo</span>
        <p>Cancel</p>
      </div>

      <div className='ochistit'>
        <span className="material-symbols-outlined">delete</span>
        <p>Remove</p>
      </div>

      <div className='zametki'>
        <span className="material-symbols-outlined">edit</span>
        <p>Zametki</p>
      </div>

      <div className='podskazka'>
        <span className="material-symbols-outlined">lightbulb</span>
        <p>Help</p>
      </div>
    </div>

    <div className='grid-numbers'>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>

    <button>Restart Game</button>
  </div>;
}