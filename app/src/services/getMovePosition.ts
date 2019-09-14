import GameConfig from '../GameConfig';

export default function getMovePosition(dir: number) {
  // console.log('move', dir);
  const {LEFT, RIGHT, UP, DOWN} = GameConfig.direction;
  const {rows, cols, } = GameConfig.board;

  const dirRow = ((dir == LEFT || dir == RIGHT) ? 0 : ((dir == UP) ? -1 : 1));
  const dirCol = ((dir == UP || dir == DOWN) ? 0 : ((dir == LEFT) ? -1 : 1));
  
  return [dirRow, dirCol];

}
