export default function resizeGame(game: Phaser.Game) {
  const {width = 0, height = 0} = game.config;
  const canvas = document.querySelector("canvas");
  const windowWidth:number = window.innerWidth || 1;
  const windowHeight:number = window.innerHeight || 1;
  const windowRatio:number = windowWidth / windowHeight;
  const gameRatio:number = Number(width) / Number(height);

  if (canvas) {
    if (windowRatio < gameRatio) {
      canvas.style.width = windowWidth + "px";
      canvas.style.height = windowWidth / gameRatio + "px";
    } else {
      canvas.style.width = windowHeight * gameRatio + "px";
      canvas.style.height = windowHeight + "px";
    }
  }
}
