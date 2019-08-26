import Phaser from 'phaser';
import {bootGame, playGame} from './scenes';
import GameConfig from './GameConfig';
import { resizeGame } from './services';


const {game:config} = GameConfig;

const game = new Phaser.Game(config);

if (window) {
  window.focus();
  resizeGame(game);
  window.addEventListener('resize', () => resizeGame(game));
}

game.scene.add("BootGame", bootGame);
game.scene.add("PlayGame", playGame);
game.scene.start("BootGame");
