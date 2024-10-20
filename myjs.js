const options = ["Heads", "Tails"];
const Score = [0, 0];
const btn = document.querySelectorAll("button");
const myDiv = document.querySelector(".message");
const last = document.getElementById("last");
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", order);
}
function order(Chosen) {
    last.innerHTML = "";
    myDiv.style.color = "black";
    last.style.marginBottom = "0px";
    let playerPick = Chosen.target.innerText;
    let computer = Math.floor((Math.random() * 2));
    let computerPick = options[computer];
    myDiv.innerHTML = "Computer chose : " + computerPick + "<br>";
    if (playerPick === computerPick) {
        ;
        Score[0]++;
        myDiv.innerHTML += "Player won this round.";


    }
    else {
        Score[1]++;
        myDiv.innerHTML += "Computer won this round.";

    }
    let scr = document.querySelector(".total");
    scr.innerHTML = "Player : " + Score[0] + " " + "Computer : " + Score[1];

    if (Score[0] >= 10 || Score[1] >= 10) {

        if (Score[0] >= 10) {
            last.innerHTML = "The player won the game.";
            last.style.marginBottom = "10px";
            myDiv.innerHTML = "Choose Heads or Tails to play again.";
            myDiv.style.color = "red";
        }
        else {
            last.innerHTML = "Computer won the game.";
            last.style.marginBottom = "10px";
            myDiv.innerHTML = "Choose Heads or Tails to play again.";
            myDiv.style.color = "red";
        }
        Score[0] = 0;
        Score[1] = 0;
    }
}