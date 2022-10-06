const playerFactory = (name, symbol) => {
  const sayHello = () => {
    return `Hello, My name is ${name}, and this is my symbol ${symbol} `;
  };
  const changePlayerName = (player, name) => {
    player.name = name;
  };
  const whoPlayedLast = (player) => {
    if (player == player1) {
      player = player2;
    } else player2;
  };
  return { name, symbol, sayHello, changePlayerName };
};

const player1 = playerFactory("P1", "X");
const player2 = playerFactory("P2", "O");

let activePlayer = player1;

const gameBoard = (() => {
  let scoreBoard = Array(9).fill("?");
  const container = document.querySelector(".container");
  const winnersText = document.querySelector(".winnersText");
  let whosTurnText = document.querySelector("h3");

  const renderBoard = () => {
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }
    scoreBoard.forEach((score, i) => {
      let div = document.createElement("div");
      div.classList.add("square");
      div.innerHTML = score;
      div.setAttribute("data-id", i);
      div.addEventListener("click", updateBoard);
      container.append(div);
    });
  };

  function updateBoard() {
    const id = this.getAttribute("data-id");
    if (this.innerHTML == "?") {
      scoreBoard[id] = activePlayer.symbol;
      renderBoard();
      checkforWinner();
      updatePlayer();
      whosTurnText.innerHTML = `${activePlayer.symbol}'s turn`;
    } else return;
  }

  const updatePlayer = () => {
    if (activePlayer == player1) {
      activePlayer = player2;
    } else activePlayer = player1;
  };

  const checkforWinner = () => {
    let winner = activePlayer.name;
    let winnerSymbol = activePlayer.symbol;
    if (
      scoreBoard[0] === winnerSymbol &&
      scoreBoard[1] === winnerSymbol &&
      scoreBoard[2] === winnerSymbol
    ) {
      (whosTurnText.outerHTML = ""),
        container.classList.add("unavailable"),
        (winnersText.innerHTML = `${winner} wins!`);
    } else if (
      scoreBoard[0] === winnerSymbol &&
      scoreBoard[3] === winnerSymbol &&
      scoreBoard[6] === winnerSymbol
    ) {
      (whosTurnText.outerHTML = ""),
        container.classList.add("unavailable"),
        (winnersText.innerHTML = `${winner} wins!`);
    } else if (
      scoreBoard[0] === winnerSymbol &&
      scoreBoard[4] === winnerSymbol &&
      scoreBoard[8] === winnerSymbol
    ) {
      (whosTurnText.outerHTML = ""),
        container.classList.add("unavailable"),
        (winnersText.innerHTML = `${winner} wins!`);
    } else if (
      scoreBoard[1] === winnerSymbol &&
      scoreBoard[4] === winnerSymbol &&
      scoreBoard[7] === winnerSymbol
    ) {
      (whosTurnText.outerHTML = ""),
        container.classList.add("unavailable"),
        (winnersText.innerHTML = `${winner} wins!`);
    } else if (
      scoreBoard[2] === winnerSymbol &&
      scoreBoard[4] === winnerSymbol &&
      scoreBoard[6] === winnerSymbol
    ) {
      (whosTurnText.outerHTML = ""),
        container.classList.add("unavailable"),
        (winnersText.innerHTML = `${winner} wins!`);
    } else if (
      scoreBoard[2] === winnerSymbol &&
      scoreBoard[5] === winnerSymbol &&
      scoreBoard[8] === winnerSymbol
    ) {
      (whosTurnText.outerHTML = ""),
        container.classList.add("unavailable"),
        (winnersText.innerHTML = `${winner} wins!`);
    } else if (
      scoreBoard[3] === winnerSymbol &&
      scoreBoard[4] === winnerSymbol &&
      scoreBoard[5] === winnerSymbol
    ) {
      (whosTurnText.outerHTML = ""),
        container.classList.add("unavailable"),
        (winnersText.innerHTML = `${winner} wins!`);
    } else if (
      scoreBoard[6] === winnerSymbol &&
      scoreBoard[7] === winnerSymbol &&
      scoreBoard[8] === winnerSymbol
    ) {
      (whosTurnText.outerHTML = ""),
        container.classList.add("unavailable"),
        (winnersText.innerHTML = `${winner} wins!`);
    } else if (scoreBoard.every((score) => score !== "?")) {
      (whosTurnText.outerHTML = ""),
        container.classList.add("unavailable"),
        (winnersText.innerHTML = `It's a draw`);
    }
  };

  const resetBoard = () => {
    scoreBoard = Array(9).fill("?");
    winnersText.innerHTML = "";
    whosTurnText.innerHTML = "";
    renderBoard();
  };

  return { scoreBoard, renderBoard, resetBoard };
})();

gameBoard.renderBoard();

const resetBoardButton = document.querySelector("#resetButton");
resetBoardButton.addEventListener("click", gameBoard.resetBoard);

const form = document.querySelector("form");
const modal = document.querySelector(".modal");
form.addEventListener("submit", () => {
  const playerOneInput = document.querySelector("#playerOneName").value;
  player1.changePlayerName(player1, playerOneInput);
  const playerTwoInput = document.querySelector("#playerTwoName").value;
  player2.changePlayerName(player2, playerTwoInput);
  modal.classList.add("hidden");
  form.reset();
});

form.onsubmit = (event) => {
  event.preventDefault();
};

const addButton = document.querySelector("#addNamesButton");
const addPlayers = () => {
  modal.classList.remove("hidden");
};
addButton.addEventListener("click", addPlayers);
