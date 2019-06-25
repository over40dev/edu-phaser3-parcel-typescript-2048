import Phaser from 'phaser';
import { bootGame, playGame } from './src/scenes';
import { IBoard, ITile } from './src/interfaces';
import { createScene, GameConfig, resizeGame } from './src/services';

export default class Game4096 extends Phaser.Game {

  game:Phaser.Game;

  constructor() {
    console.log(arguments);
    const {game:config} = GameConfig;
    super(config);
    this.game = new Phaser.Game();
    this.setupGame();
  }

  setupGame() {
    debugger;
    this.game.scene.add("BootGame", bootGame);
    this.game.scene.add("PlayGame", playGame);
    this.game.scene.start("BootGame");
    window.focus();
    resizeGame(this.game);
    window.addEventListener("resize", resizeGame);
  }

}

const Game4096Instance = new Game4096();



// function startGame() {
//   game = new Phaser.Game(GameConfig.game);
//   game.scene.add("BootGame", bootGame);
//   game.scene.add("PlayGame", playGame);
//   game.scene.start("BootGame");
//   window.focus();
//   resizeGame(game);
//   // window.addEventListener("resize", resizeGame);
// }

window.onload = () => Game4096Instance.setupGame();
