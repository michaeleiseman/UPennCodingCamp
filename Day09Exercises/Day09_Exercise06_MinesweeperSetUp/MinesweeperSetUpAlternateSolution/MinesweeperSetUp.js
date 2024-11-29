class GameBoard {
    constructor(width, height, htmlGrid) {
        this.width = width;
        this.height = height;
        this.htmlGrid = htmlGrid;
        htmlGrid.style.setProperty("grid-template-columns", "repeat(" + width + ", 30px)");
        this.cells = this.constructCells(htmlGrid);
    }
    //construct the cell objects and put them in a 2-dimensional array
    //that corresponds to their position on the grid
    constructCells(htmlGrid) {
        let cells = []
        for(let rowIndex = 0; rowIndex < this.height; rowIndex++) {
            let row = [];
            for(let colIndex = 0; colIndex < this.width; colIndex++) {
                row.push(new Cell(rowIndex, colIndex, htmlGrid));
            }
            cells.push(row);
        }
        return cells;
    }
    publishBombCounts() {
        this.determineBombCounts();
        for(let row of this.cells) {
            for(let cell of row) {
                if(cell.bombCount > 0 && !cell.hasBomb) {
                    cell.publishBombCount();
                }
            }
        }
    }
    determineBombCounts() {
        for(let row of this.cells) {
            for(let cell of row) {
                if(cell.hasBomb) {
                    let col = cell.colIndex;
                    let row = cell.rowIndex;
                    let minRow = Math.max(0, row - 1);
                    let maxRow = Math.min(gameBoard.height - 1, row + 1);
                    let minCol = Math.max(0, col - 1);
                    let maxCol = Math.min(gameBoard.width - 1, col + 1);
                    //check every cell that neighbors this cell
                    //the row indicies will be between row - 1 and row + 1 unless this cell is on the top or bottom row
                    for(let neighborRow = minRow; neighborRow <= maxRow; neighborRow++) {
                        //the column indicies will be between col - 1 and col + 1 unless this cell is in the first or last column
                        for(let neighborCol = minCol; neighborCol <= maxCol; neighborCol++) {
                            let neighborCell = gameBoard.getCell(neighborRow, neighborCol)
                            if(cell != neighborCell) {
                                neighborCell.bombCount++;
                            }
                        }
                    }
                }
            }
        }
    }
    //this function returns the cell specified by the indicies row, col
    //if either row or col are out of range for the board, it will return false
    getCell(row, col) {
        if(row < 0 || row >= this.height || col < 0 || col >= this.width) {
            return false;
        }
        return this.cells[row][col];
    }
}
class Cell {
    constructor(rowIndex, colIndex, htmlGrid) {
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
        this.htmlGrid = htmlGrid;
        this.element = this.publishCell();
        this.hasBomb = Math.random() < 0.1;
        if(this.hasBomb) {this.placeBomb();}
        this.bombCount = 0;
    }
    placeBomb() {
        let bomb = document.createElement("p");
        bomb.className = "bomb";
        bomb.textContent = "•";
        this.element.appendChild(bomb);
    }
    publishCell() {
        let element = document.createElement("div");
        element.className = "cell";
        this.htmlGrid.appendChild(element);
        element.cell = this;
        return element;
    }
    publishBombCount() {
        let p = document.createElement("p");
        p.textContent = this.bombCount.toString();
        this.element.appendChild(p);
    }

}
let gameBoard = new GameBoard(20, 20, document.getElementById("grid"));
gameBoard.publishBombCounts();