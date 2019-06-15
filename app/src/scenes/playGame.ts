import Phaser from "phaser";
import { config, Board, Tile } from '../services';

export default class playGame extends Phaser.Scene {

  boardArray:Array<Tile[]>;

  constructor() {
    super("PlayGame");
    this.boardArray = [];
  }

  create() {
    const { rows, cols } = config.boardConfig;
    for ( let row = 0; row < rows; row++) {
      this.boardArray[row] = [];
      for (let col = 0; col < cols; col++) {
        const { x, y } = this.getTilePosition(row, col);
        this.add.image(x, y, 'emptytile');
        const tile = this.add.sprite(x, y, 'tiles', 0);
        tile.visible = false; // Hide all tiles
        this.boardArray[row][col] = {
          width: 200,
          height: 200,
          spacing: 20,
          value: 0,
          front: tile,
          back: tile,
        };
      }
    }
    this.addTile();
    this.addTile();
  }

  addTile() {
    const emptyTiles = [];
    for (let row = 0; row < config.boardConfig.rows; row++) {
      for (let col = 0; col < config.boardConfig.cols; col++) {
        if (this.boardArray[row][col].value === 0) {
          emptyTiles.push({
            row,
            col,
          });
        }
        
      }
      
    }
    if (emptyTiles.length > 0) {
      let chosenTile = Phaser.Utils.Array.GetRandom(emptyTiles);
      this.boardArray[chosenTile.row][chosenTile.col].value = 1;
      this.boardArray[chosenTile.row][chosenTile.col].front.visible = true;
      this.boardArray[chosenTile.row][chosenTile.col].front.setFrame(0);
    }

  }

  getTilePosition(row: number, col: number): Phaser.Geom.Point {
    const { width, height, spacing } = config.tileConfig;
    const posX = spacing * (col + 1) + width * (col + 0.5);
    const posY = spacing * (row + 1) + height * (row + 0.5);

    return new Phaser.Geom.Point(posX, posY);
  }
}
