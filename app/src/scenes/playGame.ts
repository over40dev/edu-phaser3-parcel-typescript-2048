import Phaser from "phaser";
import { GameConfig, resizeGame } from '../services';
import { IBoard, ITile } from '../interfaces';
import { type } from "os";

export default class playGame extends Phaser.Scene {

  boardArray:Array<ITile[]>;
  canMove:boolean = false;

  constructor() {
    super("PlayGame");
    this.boardArray = [];
  }
  
  create() {
    this.canMove = false;
    const { rows, cols } = GameConfig.boardConfig;
    for ( let row = 0; row < rows; row++) {
      this.boardArray[row] = [];
      for (let col = 0; col < cols; col++) {
        const { x, y } = this.getTilePosition(row, col);
        const tile = this.add.sprite(x, y, 'tiles', 0);
        tile.visible = false; // Hide all tiles
        this.boardArray[row][col] = {
          width: 200,
          height: 200,
          value: 0,
          front: tile,
          back: tile,
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
    for (let row = 0; row < GameConfig.boardConfig.rows; row++) {
      for (let col = 0; col < GameConfig.boardConfig.cols; col++) {
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
      const tile:ITile = this.boardArray[chosenTile.row][chosenTile.col];
        tile.value = 1;
        tile.front.visible = true;
        tile.front.setFrame(0);
        tile.front.alpha = 0;
        this.tweens.add({
          targets: [tile.front],
          alpha: 1,
          duration: GameConfig.gamePlayConfig.tweenSpeed,
          callbackScope: this,
          onComplete: function() {
            console.log('tween completed', this.canMove);
            this.canMove = true;
            console.log('tween completed2', this.canMove);
          }
        });
    }
  }

  getTilePosition(row: number, col: number): Phaser.Geom.Point {
    const { width, height} = GameConfig.tileConfig;
    const { spacing } = GameConfig.boardConfig;
    const posX = spacing * (col + 1) + width * (col + 0.5);
    const posY = spacing * (row + 1) + height * (row + 0.5);

    return new Phaser.Geom.Point(posX, posY);
  }

  handleKey(event:KeyboardEvent) {

    const {code:keyPressed} = event; // ES!example##destructuring##object##alias
    console.log(`You pressed... ${keyPressed}`);
    // console.log(`event `, arguments);
    // debugger;
  }
  
  handleSwipe(event:Phaser.Input.Pointer) {
    const {upTime, downTime, upX, downX, upY, downY} = event;
    const swipeTime:number
      = upTime - downTime;
    const swipeDistance:Phaser.Geom.Point
      = new Phaser.Geom.Point(upX - downX, upY - downY);
    console.log(`
      You touched or clicked: 
      - uT is... ${upTime}
      - dT is... ${downTime}
      - uX is... ${upX}
      - dX is... ${downX}
      - uY is... ${upY}
      - dY is... ${downY}
      - sT is... ${swipeTime}
      - sD is... x:${swipeDistance.x} y:${swipeDistance.y}
    `
    );
    // const argsArray:Array<any> = Array.from(arguments);
    // console.log(event, argsArray, typeof event);
    // debugger;
  }

}
