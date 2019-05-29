import Phaser from 'phaser';

export default class bootGame extends Phaser.Scene {

  constructor() {
    super("BootGame");
  }
  preload() {
    this.load.image('emptytile', require('../assets/sprites/emptytile.png'));
  }
  create() {
    this.scene.start('PlayGame');
  }
}
