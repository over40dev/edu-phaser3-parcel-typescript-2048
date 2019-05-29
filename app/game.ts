import Phaser from 'phaser';
import { bootGame, playGame } from './src/scenes';
import { gameConfig, resizeGame } from './src/services';

let game: Phaser.Game;

function startGame() {
  game = new Phaser.Game(gameConfig);
  game.scene.add("BootGame", bootGame);
  game.scene.add("PlayGame", playGame);
  game.scene.start("BootGame");
  window.focus();
  resizeGame(game);
  // window.addEventListener("resize", resizeGame);
}

window.onload = () => startGame();
