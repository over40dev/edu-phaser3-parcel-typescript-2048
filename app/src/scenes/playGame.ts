import Phaser from 'phaser';
import {
  getMovePosition,
  setupListeners,
  resizeGame,
  getTilePosition,
} from '../services';
import GameConfig from '../GameConfig';
import { ITile, IDirection, ISwipeCriteria, IMoveKey } from '../interfaces';

export default class playGame extends Phaser.Scene {
  boardArray: Array<ITile[]>;
  canMove: boolean;

  cursorKeys: Array<string>;
  direction: IDirection;
  moveKeys: Array<string>;
  gameKeys: Array<IMoveKey>;
  // cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super('PlayGame');
    this.boardArray = [];
    this.canMove = false;
    this.direction = GameConfig.direction;
    this.cursorKeys = [];
    this.moveKeys = GameConfig.moveKeys;
    this.gameKeys = GameConfig.gameKeys;
  }

  preload() {
    window.focus();
    resizeGame(this.game);
  }

  create() {
    // when listeners are set
    setupListeners(this); // this is reference to current Scene `playGame
    // console.log(Object.keys(this.input.keyboard.keys)); // Global Phaser Input keys that have been activated for game
    // console.table(this.input.keyboard.keys); // Global Phaser Input keys that have been activated for game
    // this.cursorKeys = Object.keys(this.input.keyboard.createCursorKeys());
    const { rows, cols } = GameConfig.board;
    const { DIRECTION_VELOCITY } = GameConfig.gamePlayConfig;

    for (let row = 0; row < rows; row++) {
      this.boardArray[row] = [];
      for (let col = 0; col < cols; col++) {
        const { x, y } = this.tilePosition(row, col);
        const tile = this.add.sprite(x, y, 'tiles', 0);
        tile.visible = false; // Hide all tiles
        this.boardArray[row][col] = {
          width: 200,
          height: 200,
          value: 0,
          sprite: tile,
        };
      }
    }
    this.addTile();
    this.addTile();
    this.input.keyboard.on('keydown', this.handleKey, this);
    this.input.on('pointerup', this.handleSwipe, this);
  }

  addTile() {
    const emptyTiles = [];
    const {rows, cols} = GameConfig.board;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (this.boardArray[row][col].value === 0) {
          emptyTiles.push({
            row,
            col,
          });
        }
      }
    }
    if (emptyTiles.length > 0) {
      const chosenTile = Phaser.Utils.Array.GetRandom(emptyTiles);
      const { row, col } = chosenTile;
      const tile: ITile = this.boardArray[chosenTile.row][chosenTile.col];
      tile.value = 1;
      tile.sprite.visible = true;
      tile.sprite.setFrame(0);
      tile.sprite.alpha = 0;
      this.tweens.add({
        targets: [tile.sprite],
        alpha: 1,
        duration: GameConfig.gamePlayConfig.tweenSpeed,
        callbackScope: this,
        onComplete: () => {
          this.canMove = true;
        },
      });
    }
  }

  tilePosition(row: number, col: number): Phaser.Geom.Point {
    return getTilePosition(row, col);
  }

  handleKey(event: KeyboardEvent): void {
    const { code: keyPressed } = event; // ES!example##destructuring##object##alias
    const { RIGHT, LEFT, UP, DOWN } = this.direction;
    const isGameKey: boolean =
      this.moveKeys.some(k => k === keyPressed) &&
      this.gameKeys.some(g => g.key === keyPressed);

    const input = this.gameKeys.find(g => g.key === keyPressed);
    const role = input && input.role;

    // console.log('moveKeys ', this.moveKeys);
    // console.log('gameKeys ', this.gameKeys);
    // console.log('keyPressed ', keyPressed);
    // console.log('canMove ', this.canMove);
    // console.log('role ', role, !!role);

    // we have a game key... now what...
    // the `!!` converts an entity to boolean true or false

    if (this.canMove && isGameKey && !!role) {
      switch (role) {
        // move Right
        case 'MoveRight':
          this.makeMove(RIGHT);
          break;
        // move Left
        case 'MoveLeft':
          this.makeMove(LEFT);
          break;
        // move Up
        case 'MoveUp':
          this.makeMove(UP);
          break;
        // move Down
        case 'MoveDown':
          this.makeMove(DOWN);
          break;

        default:
          break;
      }
    }
  }

  makeMove(direction: number = 0) {
    const [dirRow, dirCol] = getMovePosition(direction);
    const { rows, cols } = GameConfig.board;
    this.canMove = false;
    
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const curRow = dirRow == 1 ? (rows - 1) - i : i;
        const curCol = dirCol == 1 ? (cols - 1) - j : j;
        const tileValue = this.boardArray[curRow][curCol].value;
        if (tileValue != 0) {
          const newPos: Phaser.Geom.Point = getTilePosition(curRow + dirRow, curCol + dirCol );
          console.log('move', curRow, curCol, tileValue, newPos.x, newPos.y);
          this.boardArray[curRow][curCol].sprite.x = newPos.x;
          this.boardArray[curRow][curCol].sprite.y = newPos.y;
        }
      }
    }
  }

  handleSwipe(event: Phaser.Input.Pointer) {
    const { upTime, downTime, upX, downX, upY, downY } = event;
    const { RIGHT, LEFT, UP, DOWN } = this.direction;
    const {
      swipeMinNormal: min,
      swipeMaxTime: maxTime,
      swipeMinDistance: minDist,
    } = GameConfig.swipeCriteria;
    const swipeTime: number = upTime - downTime;
    const fastEnough: boolean = swipeTime < maxTime;
    const swipe: Phaser.Geom.Point = new Phaser.Geom.Point(
      upX - downX,
      upY - downY
    );
    const swipeMagnitude = Phaser.Geom.Point.GetMagnitude(swipe);
    const longEnough: boolean = swipeMagnitude > minDist;

    if (longEnough && fastEnough) {
      Phaser.Geom.Point.SetMagnitude(swipe, 1);
      if (swipe.x > min) this.makeMove(RIGHT);
      if (swipe.x < -min) this.makeMove(LEFT);
      if (swipe.y > min) this.makeMove(DOWN);
      if (swipe.y < -min) this.makeMove(UP);
    }

    // console.log(`
    //   You touched or clicked:
    //   - uT is... ${upTime}
    //   - dT is... ${downTime}
    //   - uX is... ${upX}
    //   - dX is... ${downX}
    //   - uY is... ${upY}
    //   - dY is... ${downY}
    //   - sT is... ${swipeTime}ms
    //   - sD is... x:${swipe.x} y:${swipe.y} pixels
    // `);
  }
}
