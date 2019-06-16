import Phaser from 'phaser';
import { GameConfig } from '../services';

export default class bootGame extends Phaser.Scene {

  constructor() {
    super("BootGame");
  }
  preload() {
    this.load.image('emptytile', require('../assets/sprites/emptytile.png'));
    this.load.spritesheet('tiles', require('../assets/sprites/tiles.png'), {
      frameWidth: GameConfig.tileConfig.width,
      frameHeight: GameConfig.tileConfig.height,
    });
  }
  create() {
    this.scene.start('PlayGame');
  }
}
