import Phaser from "phaser";
import { 
  IBoard, 
  ITile, 
  IDirection, 
  ISwipeCriteria, 
  ISetGameKeys as Keys,
} 
  from "../interfaces";

// export const LEFT = 0;
// export const RIGHT = 1;
// export const UP = 2;
// export const DOWN = 3;

export default class GameConfig {
  static board: IBoard = {
    rows: 4,
    cols: 4,
    spacing: 20
  };

  static tile: ITile = {
    width: 200,
    height: 200,
    value: 0
  };

  static swipeCriteria: ISwipeCriteria = {
    swipeMaxTime: 1000, // ms
    swipeMinDistance: 20, // pixels
    swipeMinNormal: 0.85 // pixels of bigger component 
  };

  static gamePlayConfig = {
    tweenSpeed: 2000
  };

  static direction: IDirection = {
    LEFT: 0,
    RIGHT: 1,
    UP: 2,
    DOWN: 3
  };

  // static moveKeys: IMoveKeys = {  //TODO - 
  //   left: "left",
  //   right: "right",
  //   up: "up",
  //   down: "down",
  //   // left: "ArrowLeft",
  //   // right: "ArrowRight",
  //   // up: "ArrowUp",
  //   // down: "ArrowDown"
  // };

  static moveKeys: Array<string> = [
    "KeyA", "KeyD", "KeyW", "KeyS",
    "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"
  ];

  static game: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: "app-container",
    width:
      GameConfig.board.cols *
        (GameConfig.tile.width + GameConfig.board.spacing) +
      GameConfig.board.spacing,
    height:
      GameConfig.board.rows *
        (GameConfig.tile.height + GameConfig.board.spacing) +
      GameConfig.board.spacing
  };
}
