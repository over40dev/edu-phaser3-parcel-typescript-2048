import Phaser from 'phaser';
import {bootGame, playGame} from './src/scenes';
import GameConfig from './GameConfig';

const {game:config} = GameConfig;

const game = new Phaser.Game(config);
game.scene.add("BootGame", bootGame);
game.scene.add("PlayGame", playGame);
game.scene.start("BootGame");
