'use strict';
var Test = null;

class Tests {
    constructor() {

    }

    test_board(board, board_width, board_height, expected_mines) {
        // Tests the boards parameters
        let board_length = 0;
        let mines = 0;
        let mine_locations = []; // index of space containing a mines
        for (let row = 0; row < board.length; row++) {
            board_length += board[row].length;
            for (let col = 0; col < board[row].length; col++) {
                if (board[row][col].has_mine) {
                    mines++;
                    mine_locations.push("Row: " + row + " Col: " + col);
                }
            }
        }
        console.log("found -- expected");
        console.log("Board length: ", board_length, " -- ", board_width * board_height);
        console.log("Mine count: ", mines, " -- ", expected_mines);
        console.log("Mine locations: ", mine_locations);
    }
}

Test = new Tests();