function ChooseHand(playerHand) {
  // 乱数0~3
  let randomNumber = Math.floor(Math.random() * 3);

  // 相手の手の色を変える。
  let opponent = document.getElementById(`opponent_${randomNumber}`);
  let opponentHandImage = document.getElementById(
    `opponent_hand_img_${randomNumber}`
  );
  opponent.classList.add("Hands__list-item__opponent-hand");
  opponentHandImage.classList.add("show");

  // 自分のての色を変える
  let player = document.getElementById(`player_${playerHand}`);
  let playerHandImage = document.getElementById(
    `player_hand_img_${playerHand}`
  );
  player.classList.add("Hands__list-item__player-hand");
  playerHandImage.classList.add("show");

  if (playerHand === randomNumber) {
    result = "あいこ";
  } else if (
    (playerHand === 0 && randomNumber === 1) ||
    (playerHand === 1 && randomNumber === 2) ||
    (playerHand === 2 && randomNumber === 0)
  ) {
    result = "君の勝ち！";
  } else {
    result = "お前の負けm9(^Д^)";
  }
// 一度じゃんけんをしたらリロードしないと押せなくする
  document.getElementById("jankenGame").style.pointerEvents = "none";

  let jankenresultPC = document.getElementById("jankenresultPC");
  jankenresultPC.insertAdjacentHTML("beforeend", result);
  let jankenresultSP = document.getElementById("jankenresultSP");
  jankenresultSP.insertAdjacentHTML("beforeend", result);

}
// リロードボタン
const reloadBtn = document.getElementById("reloadBtn");
reloadBtn.addEventListener("click", function () {
  location.reload();
});
