import { IBoard, ITile } from ".";

export default interface IConfig {
  boardConfig:IBoard;
  tileConfig:ITile;
  gameConfig:Phaser.Types.Core.GameConfig;
}
