import Phaser from 'phaser';
import { setupListeners } from '../services';
import GameConfig from '../../GameConfig';
// import { setupListeners } from '../services/InputManager';

export default class bootGame extends Phaser.Scene {

  constructor() {
    super("BootGame");
  }
  preload() {
    this.load.image('emptytile', require('../assets/sprites/emptytile.png'));
    this.load.spritesheet('tiles', require('../assets/sprites/tiles.png'), {
      frameWidth: GameConfig.tile.width,
      frameHeight: GameConfig.tile.height,
    });
  }
  create() {
    setupListeners(this); // `this` is the `scene:` `bootGame`
    this.game.scene.start("PlayGame");
  }
}
