import Phaser from "phaser";
import {
  IBoard,
  ITile,
  IDirection,
  ISwipeCriteria,
  IMoveKey,
} from "./interfaces";

class GameConfig {
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

  static moveKeys: Array<string> = [
    "KeyA",
    "KeyD",
    "KeyW",
    "KeyS",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown"
  ];

  static gameKeys: Array<IMoveKey> = [
    {
      name: "KeyW",
      value: Phaser.Input.Keyboard.KeyCodes.W,
    },
    {
      name: "KeyA",
      value: Phaser.Input.Keyboard.KeyCodes.A,

    },
    {
      name: "KeyS",
      value: Phaser.Input.Keyboard.KeyCodes.S,

    },
    {
      name: "KeyD",
      value: Phaser.Input.Keyboard.KeyCodes.D,

    },
    {
      name: "ArrowUp",
      value: Phaser.Input.Keyboard.KeyCodes.UP,

    },
    {
      name: "ArrowLeft",
      value: Phaser.Input.Keyboard.KeyCodes.LEFT,

    },
    {
      name: "ArrowDown",
      value: Phaser.Input.Keyboard.KeyCodes.DOWN,

    },
    {
      name: "ArrowRight",
      value: Phaser.Input.Keyboard.KeyCodes.RIGHT,

    }
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
export default GameConfig;
