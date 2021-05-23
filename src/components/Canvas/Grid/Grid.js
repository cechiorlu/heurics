import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { randomIntFromInterval, Queue } from '../../../utils'
import './Grid.css'


const ROW_SIZE = 8;
const COL_SIZE = 10




// Position ship randomly ---------------------------------------

const getStartPosition = grid => {
    const rowSize = grid.length - 1
    const colSize = grid[0].length - 1
    const startingRow = randomIntFromInterval(0, rowSize)
    const startingCol = randomIntFromInterval(0, colSize)
    const startingCell = grid[startingRow][startingCol]
    return {
        row: startingRow,
        col: startingCol,
        cell: startingCell,
    }
}





function Grid({ benchControls, braceControls, gameStart, dispatch }) {
    const grid = createGrid(ROW_SIZE, COL_SIZE)
    const [startPos, setStartPos] = useState(getStartPosition(grid))
    const [currPos, setCurrPos] = useState(startPos)


    // Get controls -------------------------------------------------------
    // Consider making this a function for better extraction


    const bench = new Queue()
    const brace = []
    _.map(benchControls, (data) => {
        const ctrl = data.id.split(' ')[0]
        bench.enqueue(ctrl)
    })
    _.map(braceControls, (data) => {
        const ctrl = data.id.split(' ')[0]
        brace.push(ctrl)
    })
    const getBraceIdx = function () {
        let braceIdArr = []
        for (let i = 0; i < bench.size(); i++) {
            const braceIdx = _.findIndex(bench.collection, function (o) { return bench.collection[i] === 'braces' })
            if (braceIdx > 0 || braceIdx === 0) {
                braceIdArr.push(i)
            }
        }
        return braceIdArr
    }

    const addBraceControlstoBench = function(){
        let braceIdArr = getBraceIdx()
        for (let i = 0; i < braceIdArr.length; i++){
            bench.collection.splice(braceIdArr[i], 1, ...brace)
            braceIdArr = braceIdArr.map((idx) => { return idx + brace.length - 1 })
        }
    }
    
    addBraceControlstoBench()
    bench.print()
    // Game start and stop events -------------------------------------------------------------

    /**
     *  - if boat should leave grid, end game
     *  - after running code, end game
     */





    return (
        <div className="grid">
            {grid.map((row, rowIdx) => (
                <div key={rowIdx} className="row">
                    {row.map((cellValue, cellIdx) => {
                        const className = getCellClassName(cellValue, currPos)
                        return <div key={cellIdx} className={className}></div>;
                    })}
                </div>
            ))}
        </div>
    )
}

const createGrid = (ROW_SIZE, COL_SIZE) => {
    let counter = 1;
    const grid = [];
    for (let row = 0; row < ROW_SIZE; row++) {
        const currentRow = [];
        for (let col = 0; col < COL_SIZE; col++) {
            currentRow.push(counter++);
        }
        grid.push(currentRow);
    }
    return grid;
}

const getCellClassName = (cellValue, currPos) => {
    let className = 'cell';
    if (cellValue === currPos.cell) {
        className = 'cell cell-location'
    }

    return className;
}


// bench.forEach(ctrl => {
//     let updatedPosition
//     if (ctrl === 'arrowUp' && currPos.row > 0) {
//         // set Direction.UP
//         updatedPosition = {
//             row: currPos.row - 1,
//             col: currPos.col,
//             cell: grid[currPos.row - 1][currPos.col]
//         }
//     }
//     if (ctrl === 'arrowDown' && currPos.row < ROW_SIZE - 1) {
//         updatedPosition = {
//             row: currPos.row + 1,
//             col: currPos.col,
//             cell: grid[currPos.row + 1][currPos.col]
//         }
//     }
//     if (ctrl === 'arrowLeft' && currPos.col > 0) {
//         updatedPosition = {
//             row: currPos.row,
//             col: currPos.col - 1,
//             cell: grid[currPos.row][currPos.col - 1]
//         }
//     }
//     if (ctrl === 'arrowRight' && currPos < COL_SIZE - 1) {
//         updatedPosition = {
//             row: currPos.row,
//             col: currPos.col + 1,
//             cell: grid[currPos.row][currPos.col + 1]
//         }
//     }
//     setCurrPos(updatedPosition)
// });

// const Direction = {
//     UP: 'UP',
//     RIGHT: 'RIGHT',
//     DOWN: 'DOWN',
//     LEFT: 'LEFT',
// }

// const getShipDirection = key => {
//     if (key === 'arrowUp') return Direction.UP;
//     if (key === 'arrowRight') return Direction.RIGHT;
//     if (key === 'arrowDown') return Direction.DOWN;
//     if (key === 'arrowLeft') return Direction.LEFT;
//     return '';
// };

// const getNextNodeDirection = (node, currentDirection) => {
//     if (node.next === null) return currentDirection;
//     const { row: currentRow, col: currentCol } = node.value;
//     const { row: nextRow, col: nextCol } = node.next.value;
//     if (nextRow === currentRow && nextCol === currentCol + 1) {
//         return Direction.RIGHT;
//     }
//     if (nextRow === currentRow && nextCol === currentCol - 1) {
//         return Direction.LEFT;
//     }
//     if (nextCol === currentCol && nextRow === currentRow + 1) {
//         return Direction.DOWN;
//     }
//     if (nextCol === currentCol && nextRow === currentRow - 1) {
//         return Direction.UP;
//     }
//     return '';
// };

export default Grid
