

function ChooseHand(playerHand) {
  // 乱数0~3
  let randomNumber = Math.floor(Math.random() * 3);

  // 相手の手の色を変える。
  let opponent = document.getElementById(`opponent_${randomNumber}`);
  let opponentHandImage = document.getElementById(`opponent_hand_img_${randomNumber}`);
  opponent.classList.add("Hands__list-item__opponent-hand");
  opponentHandImage.classList.add("show");

  // 自分のての色を変える
  let player = document.getElementById(`player_${playerHand}`);
  let playerHandImage = document.getElementById(`player_hand_img_${playerHand}`);
  player.classList.add("Hands__list-item__player-hand");
  playerHandImage.classList.add("show");


  let result = null;
  function win(){
    result = "君の勝ち！"
  }

  if (playerHand === randomNumber) {
    result = "あいこ（はあと）"
  } else if (playerHand === 0 && randomNumber === 1) {
    win();
  } else if (playerHand === 1 && randomNumber === 2) {
    win();
  } else if (playerHand === 2 && randomNumber === 0) {
    win();
  } else {
    result = "お前の負けm9(^Д^)"
  }

  
  document.getElementById("jankenGame").style.pointerEvents = "none";
  
  console.log(result);

  let jankenResult = document.getElementById("jankenResult");
  jankenResult.insertAdjacentHTML("beforeend",result);

}