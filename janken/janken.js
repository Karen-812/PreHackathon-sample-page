

function ChooseHand(playerHand) {
  // 乱数0~3
  let randomNumber = Math.floor(Math.random() * 3);

  // 相手の手の色を変える。
  let opponent = document.getElementById(`opponent_${randomNumber}`);
  opponent.classList.add("Hands__list-item__opponent-hand");

  // 自分のての色を変える
  let player = document.getElementById(`player_${playerHand}`);
  player.classList.add("Hands__list-item__player-hand");

  if (playerHand === randomNumber) {
    result = "あいこ"
  } else if (playerHand === 0 && randomNumber === 1 || playerHand === 1 && randomNumber === 2 || playerHand === 2 && randomNumber === 0) {
    result = "君の勝ち！"
  } else {
    result = "お前の負けm9(^Д^)"
  }
  
  document.getElementById("jankenGame").style.pointerEvents = "none";
  
  console.log(result);

  let jankenResult = document.getElementById("jankenResult");
  jankenResult.insertAdjacentHTML("beforeend",result);

}