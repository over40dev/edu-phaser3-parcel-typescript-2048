import Phaser from 'phaser';
import { config } from '../services';

export default class bootGame extends Phaser.Scene {

  constructor() {
    super("BootGame");
  }
  preload() {
    this.load.image('emptytile', require('../assets/sprites/emptytile.png'));
    this.load.spritesheet('tiles', require('../assets/sprites/tiles.png'), {
      frameWidth: config.tileConfig.width,
      frameHeight: config.tileConfig.height,
    });
  }
  create() {
    this.scene.start('PlayGame');
  }
}
