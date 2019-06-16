import Phaser from 'phaser';

export default interface ITile {
  width: number; // pixels
  height: number;
  value: number | string; 
  front?: any; // sprite | image
  back?: any; // sprite | image
  location?: Phaser.Geom.Point; // (x, y);
  boardPosition?: {row:number; col:number};
}
