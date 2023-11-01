import React, { FC, useRef, useState } from 'react';
import { X_O } from '../../types/X_O';
import '../game_x_o/game_x_o.css'




const Game_x_o = () => {
  const [matrix, setMatrix] = useState([
    [{} as X_O, {} as X_O, {} as X_O],
    [{} as X_O, {} as X_O, {} as X_O],
    [{} as X_O, {} as X_O, {} as X_O]
  ])
  const [click, setClick] = useState(false);

  const [k, setK] = useState('x');

  const changeFull = () => {
    let f = 1
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (matrix[i][j].click == false) {
          f = 0
        }
      }
    }
    if (f == 1) {
      setClick(true)
    }
  }


  const changeMat = (index: number, iCol: number) => {

    if (matrix[index][iCol].click == true) {
      alert("this button clicked already")
      setClick(true)
    }
    if (k == 'x') {
      matrix[index][iCol].kind = 'x';
      setK('o')
      matrix[index][iCol].click = true
    }
    else {
      matrix[index][iCol].kind = 'o';
      setK('x')
      matrix[index][iCol].click = true
    }
    if (((matrix[0][0].click == true) && (matrix[1][1].click == true) && (matrix[2][2].click == true))) {
      if ((matrix[0][0].kind == matrix[1][1].kind) && (matrix[1][1].kind == matrix[2][2].kind)) {
        alert(`you gat it, ${matrix[0][0].kind} WINNNN`)
      }
    }
    if (((matrix[0][2].click == true) && (matrix[1][1].click == true) && (matrix[2][0].click == true))) {
      if ((matrix[0][2].kind == matrix[1][1].kind) && (matrix[1][1].kind == matrix[2][0].kind)) {
        alert(`you gat it, ${matrix[0][2].kind} WINNNN`)
      }
    }
    for (let i = 0; i < 3; i++) {

      if (((matrix[0][i].click == true) && (matrix[1][i].click == true) && (matrix[2][i].click == true)) ||
        ((matrix[i][0].click == true) && (matrix[i][1].click == true) && (matrix[i][2].click == true))) {
        if (((matrix[0][i].kind == matrix[1][i].kind) && (matrix[2][i].kind == matrix[1][i].kind)) ||
          ((matrix[i][0].kind == matrix[i][1].kind) && (matrix[i][1].kind == matrix[i][2].kind))) {

          alert(`you gat it, WINNNN`)
        }
      }

    }


  }

  return <div>

    <div className="game">
      GAME x o
    </div>
    <div className="g">
      {
        matrix.map((row, index) => {
          return <div>
            {row.map((col, indexCol) => {
              return <button onClick={() => { changeMat(index, indexCol) }} >{!click ? matrix[index][indexCol].kind : <p>click</p>}</button>
            })}
          </div>
        })
      }
    </div>

  </div>

}

export default Game_x_o;
