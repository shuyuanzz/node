module.exports = function (playerAction) {
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
    return "平局";
  } else if (
    (playerAction === "rock" && computerAction === "scissor") ||
    (playerAction === "scissor" && computerAction === "paper") ||
    (playerAction === "paper" && computerAction === "rock")
  ) {
    return "你赢了";
  } else {
    return "你输了";
  }
};
