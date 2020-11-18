const argv = process.argv;
const playerAction = argv[argv.length - 1];
const random = Math.random() * 3;
let computerAction;
if (random < 1) {
  computerAction = "rock";
} else if (1 <= random && random < 2) {
  computerAction = "scissor";
} else {
  computerAction = "paper";
}
if (playerAction === computerAction) {
  console.log("平局");
} else if (
  (playerAction === "rock" && computerAction === "scissor") ||
  (playerAction === "scissor" && computerAction === "paper") ||
  (playerAction === "paper" && computerAction === "rock")
) {
  console.log("你赢了");
} else {
  console.log("你输了");
}
