import Phaser from "phaser";
import { GameConfig, resizeGame } from '../services';
import { IBoard, ITile } from '../interfaces';

export default class playGame extends Phaser.Scene {

  boardArray:Array<ITile[]>;

  constructor() {
    super("PlayGame");
    this.boardArray = [];
  }

  create() {
    const { rows, cols } = GameConfig.boardConfig;
    for ( let row = 0; row < rows; row++) {
      this.boardArray[row] = [];
      for (let col = 0; col < cols; col++) {
        const { x, y } = this.getTilePosition(row, col);
        const tile = this.add.sprite(x, y, 'tiles', 0);
        tile.visible = false; // Hide all tiles
        this.boardArray[row][col] = {
          width: 200,
          height: 200,
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
    for (let row = 0; row < GameConfig.boardConfig.rows; row++) {
      for (let col = 0; col < GameConfig.boardConfig.cols; col++) {
        if (this.boardArray[row][col].value === 0) {
          emptyTiles.push({
            row,
            col,
          });
        }
        
      }
      
    }
    if (emptyTiles.length > 0) {
      const chosenTile = Phaser.Utils.Array.GetRandom(emptyTiles);
      const { row, col } = chosenTile;
      const tile:ITile = this.boardArray[chosenTile.row][chosenTile.col];
        tile.value = 1;
        tile.front.visible = true;
        tile.front.setFrame(0);
        tile.front.alpha = 0;
        this.tweens.add({
          targets: [tile.front],
          alpha: 1,
          duration: GameConfig.gamePlayConfig.tweenSpeed,
        });
    }
  }

  getTilePosition(row: number, col: number): Phaser.Geom.Point {
    const { width, height} = GameConfig.tileConfig;
    const { spacing } = GameConfig.boardConfig;
    const posX = spacing * (col + 1) + width * (col + 0.5);
    const posY = spacing * (row + 1) + height * (row + 0.5);

    return new Phaser.Geom.Point(posX, posY);
  }
}
