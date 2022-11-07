//create a class of 2Dmap
const MAP_NUM_ROWS = 11;
const MAP_NUM_COLS = 15;
const TAILLE_SIZE = 32;
const WINDOW_WIDTH = MAP_NUM_COLS * TAILLE_SIZE;
const WINDOW_WEIGHT = MAP_NUM_ROWS * TAILLE_SIZE;
class Map {
    constructor() {
        this.grid = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ];


    }
    render() {
        for (var i = 0; i < MAP_NUM_ROWS; i++) {
            for (var j = 0; j < MAP_NUM_COLS; j++) {
                var tailleX = j * TAILLE_SIZE;
                var tailleY = i * TAILLE_SIZE;
                var tailleCOLOR = this.grid[i][j] == 1 ? "#222" : "#fff";
                stroke("#222");
                fill(tailleCOLOR);
                rect(tailleX, tailleY, TAILLE_SIZE, TAILLE_SIZE);
            }
        }
    }
}



var grid = new Map();

function setup() {
    // initialize all objects
    //Creates a canvas element in the document and sets its dimensions in pixels.
    createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
}

function update() {
    //to do: update all game objects before we render the next frame

}

function fraw() {
    update();
    grid.render();
    //to do : render all objects frame by frame
}