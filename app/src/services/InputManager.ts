import Phaser from 'phaser';
import {INameValue} from '../interfaces';

class InputManager {

  keys:Array<INameValue>;
  bindings:Array<number>;

  constructor() {
    this.bindings = [];
    this.keys = [
      {name: 'KeyW', value: Phaser.Input.Keyboard.KeyCodes.W},
      {name: 'KeyA', value: Phaser.Input.Keyboard.KeyCodes.A},
      {name: 'KeyS', value: Phaser.Input.Keyboard.KeyCodes.S},
      {name: 'KeyD', value: Phaser.Input.Keyboard.KeyCodes.D},
      {name: 'ArrowUp', value: Phaser.Input.Keyboard.KeyCodes.UP},
      {name: 'ArrowLeft', value: Phaser.Input.Keyboard.KeyCodes.LEFT},
      {name: 'ArrowDown', value: Phaser.Input.Keyboard.KeyCodes.DOWN},
      {name: 'ArrowRight', value: Phaser.Input.Keyboard.KeyCodes.RIGHT},
    ];
  }

  setupListeners(scene:Phaser.Scene) {
    this.keys.forEach(({name, value}) => {
      this.bindings[name] = scene.input.keyboard.addKey(value);
    });
  }
}

const InputManagerInstance = new InputManager();

export const setupListeners = (scene:Phaser.Scene) => InputManagerInstance.setupListeners(scene);

