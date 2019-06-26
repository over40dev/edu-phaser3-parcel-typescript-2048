import Phaser from 'phaser';
import GameConfig from '../GameConfig';

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
    this.game.scene.start("PlayGame");
  }
}
