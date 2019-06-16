import Phaser from "phaser";
import { IBoard, ITile } from "../interfaces";

export default class GameConfig {
  
  static boardConfig:IBoard = {
    rows: 4,
    cols: 4,
    spacing: 20,
  };

  static tileConfig:ITile = {
    width: 200,
    height: 200,
    value: 0,
  };

  static gamePlayConfig = {
    tweenSpeed:2000, 
  };

  static gameConfig:Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: "app-container",
    width: GameConfig.boardConfig.cols * (GameConfig.tileConfig.width + GameConfig.boardConfig.spacing) +
      GameConfig.boardConfig.spacing,
    height: GameConfig.boardConfig.rows * (GameConfig.tileConfig.height + GameConfig.boardConfig.spacing) +
      GameConfig.boardConfig.spacing
  }; 
}
