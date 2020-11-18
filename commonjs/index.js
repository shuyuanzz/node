const game = require("./lib");
let b  = 0;
process.stdin.on("data", (e) => {
  const playerAction = e.toString().trim();
  result = game(playerAction);
  if(result === '你赢了') {
      b ++;
  }
  if(b === 3) {
      console.log('你太厉害了 我不玩了');
      process.exit();
  }
  console.log(result);
});
