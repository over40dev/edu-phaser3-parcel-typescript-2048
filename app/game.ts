import Phaser from 'phaser';
import { bootGame, playGame } from './src/scenes';
import { IBoard, ITile } from './src/interfaces';
import { GameConfig, resizeGame } from './src/services';

let game: Phaser.Game;

function startGame() {
  game = new Phaser.Game(GameConfig.gameConfig);
  game.scene.add("BootGame", bootGame);
  game.scene.add("PlayGame", playGame);
  game.scene.start("BootGame");
  window.focus();
  resizeGame(game);
  // window.addEventListener("resize", resizeGame);
}

window.onload = () => startGame();
