import Phaser from "phaser";
import { gameOptions } from "../services";

export default class playGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }

  create() {
    const { rows, cols } = gameOptions.boardSize;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const { x, y } = this.getTilePosition(row, col);
        this.add.image(x, y, 'emptytile');
      }
    }
  }

  getTilePosition(row: number, col: number): Phaser.Geom.Point {
    const { tileSize, tileSpacing } = gameOptions;
    const posX = tileSpacing * (col + 1) + tileSize * (col + 0.5);
    const posY = tileSpacing * (row + 1) + tileSize * (row + 0.5);

    return new Phaser.Geom.Point(posX, posY);
  }
}
