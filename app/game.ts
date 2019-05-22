import Phaser from "phaser";

let game: Phaser.Game;
let gameConfig: Phaser.Types.Core.GameConfig;

class bootGame extends Phaser.Scene {
  constructor() {
    super("BootGame");
  }
  preload() {
    this.load.image("emptytile", require('./emptytile.png'));
  }
  create() {
    this.scene.start("PlayGame");
  }
}

class playGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }
  create() {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        this.add.image(100 + col * 200, 100 + row * 200, 'emptytile');

      }
    }
    // this.add.image(100, 100, "emptytile");
  }
}

function startGame() {
  gameConfig = {
    parent: "app-container",
    width: 900,
    height: 900,
    // backgroundColor: 0xff00ff,
    backgroundColor: 0xecf0f1,
    scene: [bootGame, playGame]
  };
  game = new Phaser.Game(gameConfig);
  window.focus();
  resizeGame();
  window.addEventListener("resize", resizeGame);
}

window.onload = () => startGame();

///////////////////
function resizeGame() {
  const canvas = document.querySelector("canvas");
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const windowRatio = windowWidth / windowHeight;
  const gameRatio:any = (game.config.width / game.config.height) || 1;
  console.log(windowRatio, gameRatio);

  if (canvas) {
    if (windowRatio < gameRatio) {
      canvas.style.width = windowWidth + "px";
      canvas.style.height = windowWidth / gameRatio + "px";
    } else {
      canvas.style.width = (windowHeight * gameRatio) + "px";
      canvas.style.height = windowHeight + "px";
    }
  }
}
