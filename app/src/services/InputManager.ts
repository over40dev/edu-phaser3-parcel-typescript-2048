import Phaser, { Game } from 'phaser';
import GameConfig from '../GameConfig';
import {IMoveKey} from '../interfaces';

class InputManager {

  // moveKeys:Array<string>;
  gameKeys:Array<IMoveKey>;

  constructor() {
    // this.moveKeys = GameConfig.moveKeys;
    this.gameKeys = GameConfig.gameKeys;
    console.table(this.gameKeys);
  }

  setupListeners(scene:Phaser.Scene) {
      this.gameKeys.forEach((key) => {
        key.listener = scene.input.keyboard.addKey(key.value); // RED-FLAG: possible change default Phaser behaviour of Global variable setting?
      });
  }
}
          // this.keys.forEach((key:string)) => {
          //   this.bindings[key] = scene.input.keyboard.addKey(key);

const InputManagerInstance = new InputManager();

export const setupListeners = (scene:Phaser.Scene) => InputManagerInstance.setupListeners(scene);

