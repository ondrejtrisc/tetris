import React, { useState } from 'react';
import './Board.css';
import Square from './Square.js'

function Board() {

  const height = 20;
  const width = 10;

  const display = [];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      display.push(<Square color="white" key={'row-' + i + '-column-' + j} />)
    }
  }
  
  return (
    <>
      <div id="board" class="board">
        {display}
      </div>
    </>
  );
}

export default Board;