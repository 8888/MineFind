'use strict';
var Test = null;

class Tests {
    constructor() {

    }

    test_board(board, expected_length, expected_mines) {
        // Tests the boards parameters
        var board_length = board.length;
        var mines = 0;
        var mine_locations = []; // index of space containing a mine
        for (var m = 0; m < board_length; m++) {
            if (board[m].has_mine) {
                mines++;
                mine_locations.push(m);
            }
        }
        console.log("found -- expected");
        console.log("Board length: ", board_length, " -- ", expected_length);
        console.log("Mine count: ", mines, " -- ", expected_mines);
        console.log(mine_locations);
    }
}

Test = new Tests();