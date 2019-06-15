import Phaser from 'phaser';

interface Board {
  rows: number;
  cols: number;
  height?: number;
  width?: number;
}

interface Tile {
  width: number; // pixels
  height: number;
  spacing: number;
  value: number | string; 
  front: Phaser.GameObjects.Sprite | Phaser.GameObjects.Image; // sprite | image
  back: Phaser.GameObjects.Sprite | Phaser.GameObjects.Image; // sprite | image
  location?: Phaser.Geom.Point; // (x, y);
  boardPosition?: {row:number; col:number};
}

export {Board, Tile};
