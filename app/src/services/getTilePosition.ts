import GameConfig from '../GameConfig';

export default function getTilePosition(row: number, col: number) {
  const { width, height } = GameConfig.tile;
  const { spacing } = GameConfig.board;
  const posX = spacing * (col + 1) + width * (col + 0.5);
  const posY = spacing * (row + 1) + height * (row + 0.5);

  // console.log('getTilePosition', posX, posY);

  return new Phaser.Geom.Point(posX, posY);
}