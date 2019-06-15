import Phaser from "phaser";
import {Board, Tile} from './interfaces';

const boardConfig:Board = {
  rows: 4,
  cols: 4,
};

const tileConfig:Tile = {
  width: 200,
  height: 200,
  spacing: 20,
  value: 0,
};

const gameConfig:Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "app-container",
  width: boardConfig.cols * (tileConfig.width + tileConfig.spacing) + tileConfig.spacing,
  height: boardConfig.rows * (tileConfig.height + tileConfig.spacing) + tileConfig.spacing,
}; 

export default { gameConfig, boardConfig, tileConfig };
