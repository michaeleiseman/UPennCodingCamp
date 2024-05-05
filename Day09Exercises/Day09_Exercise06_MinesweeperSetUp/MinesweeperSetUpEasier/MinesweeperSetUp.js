class GameBoard {
    constructor(width, height, htmlGrid) {
        this.width = width;
        this.height = height;
        this.htmlGrid = htmlGrid;
        //this sets the width of the css grid 
        htmlGrid.style.setProperty("grid-template-columns", "repeat(" + width + ", 30px)");
        this.cells = this.constructCells(htmlGrid);
    }
    //construct the cell objects and put them in a 2-dimensional array
    //that corresponds to their position on the grid
    //[
    //  [cells[0][0], cells[0][1], cells[0][2] ... cells[0][width - 2], cells[0][width - 1]],
    //  [cells[1][0], cells[1][1], cells[1][2] ... cells[1][width - 2], cells[1][width - 1]],
    //  [cells[2][0], cells[2][1], cells[2][2] ... cells[2][width - 2], cells[2][width - 1]],
    //                                  :
    //                                  :
    //  [cells[height - 2][0], cells[height - 2][1], cells[height - 2][2] ... cells[height - 2][width - 2], cells[height - 2][width - 1]], 
    //  [cells[height - 1][0], cells[height - 1][1], cells[height - 1][2] ... cells[height - 1][width - 2], cells[height - 1][width - 1]]
    //]  
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
        //for every row of the game board
        for(let row of this.cells) {
            //and for every cell in each row
            for(let cell of row) {
                /***** CALL A METHOD ON THE CELL HERE THAT DETERMINES THE BOMB COUNT FOR THIS CELL ******/
                /***** AND STORES THE BOMB COUNT IN cell.bombCount  *****/

                /***** IF THE BOMB COUNT FOR THIS CELL IS GREATER THAN 0, ******/
                    /****** CALL THE cell.publishBombCount() METHOD BELOW TO WRITE THE BOMB COUNT ON THE GRID ******/


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
    //This method places the html element representing a bomb into this cell
    placeBomb() {
        let bomb = document.createElement("p");
        bomb.className = "bomb";
        bomb.textContent = "•";
        this.element.appendChild(bomb);
    }
    //This method places the html element for this cell into the grid
    publishCell() {
        let element = document.createElement("div");
        element.className = "cell";
        this.htmlGrid.appendChild(element);
        element.cell = this;
        return element;
    }
    /***** WRITE YOUR METHOD TO DETERMINE THE BOMB COUNT IN A CELL HERE *********/
    
        //if this cell has a bomb (note that this cell has a "hasBomb" property)

            /* just return - don't do anything - we don't need to determine a bomb count
            for any cell that contains a bomb */
        
        // start by getting the row index and column index for this cell using the rowIndex and colIndex properties of this cell
        
        
        /* check every cell that neighbors this cell.  Note that you can get a specific cell using the
        gameBoard.getCell(row, col) method 
         _____________________________________________________________________________________________________________
        |                                     |                                 |                                     |
        | gameBoard.getCell(row - 1, col - 1) | gameBoard.getCell(row - 1, col) | gameBoard.getCell(row - 1, col + 1) |
        |_____________________________________|_________________________________|_____________________________________|
        |                                     |                                 |                                     |
        |   gameBoard.getCell(row, col - 1)   |   gameBoard.getCell(row, col)   |   gameBoard.getCell(row, col + 1)   |
        |_____________________________________|_________________________________|_____________________________________|
        |                                     |                                 |                                     |
        | gameBoard.getCell(row + 1, col - 1) | gameBoard.getCell(row + 1, col) | gameBoard.getCell(row + 1, col + 1) |
        |_____________________________________|_________________________________|_____________________________________|

        */ 
                
        //increase the bomb count for this cell (note that bombCount is a property of this cell) for every neighboring cell that has a bomb

        


    publishBombCount() {
        let p = document.createElement("p");
        p.textContent = this.bombCount.toString();
        this.element.appendChild(p);
    }
}
let gameBoard = new GameBoard(20, 20, document.getElementById("grid"));
gameBoard.publishBombCounts();