var boxes = document.querySelectorAll(".box");
var text = document.querySelector(".container-title");

const O_text = "O";
const X_text = "X";
var isgame = true;

let currentPlayer = X_text;

var arr = Array(9).fill(null); // bos array yaradiriq ici null 9 eded element

const startGame = () => {
  boxes.forEach((box) => {
    box.addEventListener("click", boxClicked);
  });
};

function boxClicked(e) {
  if (isgame) {
    const id = e.target.id;

    if (!arr[id]) {
      arr[id] = currentPlayer;
      e.target.innerText = currentPlayer;

      if (playerWon() !== false) {
        text.innerHTML = `${currentPlayer} has won!`;
        let winning_blocks = playerWon();
        winning_blocks.map((box) => {
          boxes[box].style.backgroundColor = "red";
          isgame = false;
        });
        return;
      }
      currentPlayer = currentPlayer == X_text ? O_text : X_text; // currentplayer default olaraq x vermisik ve burda yoxluyurgki currentplayer deyeri x'e beraberdise O olsun deyeri eger beraber deyilse X olsun
    }
  }
}

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function playerWon() {
  console.log(arr);
  for (const element of winningCombos) {
    // console.log(element);
    let [a, b, c] = element;

    if (arr[a] && arr[a] == arr[b] && arr[a] == arr[c]) {
      console.log("a", arr[a]);
      console.log("b", arr[b]);
      console.log("c", arr[c]);
      return [a, b, c];
    }
  }
  return false;
}

startGame();
