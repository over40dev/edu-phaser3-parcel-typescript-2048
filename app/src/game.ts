import Phaser from "phaser";

let game: Phaser.Game;
let gameConfig: Phaser.Types.Core.GameConfig;

function startGame() {
  gameConfig = {
    parent: "app-container",
    width: 480,
    height: 640,
    backgroundColor: 0xff00ff,
    scene: [bootGame, playGame]
  };
  game = new Phaser.Game(gameConfig);
  window.focus();
  resizeGame();
  window.addEventListener("resize", resizeGame);
}

class bootGame extends Phaser.Scene {
  constructor() {
    super("BootGame");
  }
  create() {
    console.log('game is booting...');
    game.scene.start("PlayGame");
  }
}

class playGame extends Phaser.Scene {
  constructor() {
    super("PlayGame");
  }
  create() {
    console.log('here is my awesome game!');
  }
}

startGame();

///////////////////
function resizeGame() {
  const canvas = document.querySelector("canvas");
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const windowRatio = windowWidth / windowHeight;
  const gameRatio = game.config.width / game.config.height;
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
