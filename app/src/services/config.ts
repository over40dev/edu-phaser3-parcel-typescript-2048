import Phaser from "phaser";

let gameOptions = {
  tileSize: 200,
  tileSpacing: 20,
  boardSize: {
    rows: 4,
    cols: 4
  }
};

const { tileSize, tileSpacing } = gameOptions;
const { rows, cols } = gameOptions.boardSize;

let gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "app-container",
  width: cols * (tileSize + tileSpacing) + tileSpacing,
  height: rows * (tileSize + tileSpacing) + tileSpacing,
  // backgroundColor: 0xecf0f1,
};

export { gameOptions, gameConfig };
