"use strict";
// document.querySelector('.message').textContent;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber);

$(".check").click(function () {
  const guess = Number($(".guess").val());
  //no input
  if (!guess) {
    $(".message").text("No secretNumber");
    //player wins
  } else if (secretNumber === guess) {
    $("body").css("background-color", "#60b347");
    $(".number").text(secretNumber);
    $(".number").text("Correct Number");
    $(".number").css("width", "40rem");
    if (score > highscore) {
      highscore = score;
      $(".highscore").text(highscore);
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score = score - 1;
      $(".score").text(score);
      $(".message").text(guess > secretNumber ? "Too Heigh" : "Too Low");
    } else {
      $(".message").text("U Lost The Game");
      $(".score").text(0);
    }
  }
});

$(".again").click(function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  $(".score").text(20);
  $(".number").text("?");
  $(".guess").val("");
  $("body").css("background-color", "#222");
  $(".message").text("Start guessing...");
});
