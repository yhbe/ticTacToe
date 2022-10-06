const playerFactory = (name, symbol) => {
  const sayHello = () => {
    return `Hello, My name is ${name}, and this is my symbol ${symbol} `;
  };
  const changePlayerName = (player, name) => {
    return (player.name = name);
  };
  return { name, symbol, sayHello, changePlayerName };
};

const player1 = playerFactory("P1", "X");
const player2 = playerFactory("P2", "O");

let activePlayer = player1;

const gameBoard = (() => {
  let scoreBoard = Array(9).fill("?");
  const container = document.querySelector(".container");

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
      alert(`${winner} wins!!`);
    } else if (
      scoreBoard[0] === winnerSymbol &&
      scoreBoard[3] === winnerSymbol &&
      scoreBoard[6] === winnerSymbol
    ) {
      alert(`${winner} wins!!`);
    } else if (
      scoreBoard[0] === winnerSymbol &&
      scoreBoard[4] === winnerSymbol &&
      scoreBoard[8] === winnerSymbol
    ) {
      alert(`${winner} wins!!`);
    } else if (
      scoreBoard[1] === winnerSymbol &&
      scoreBoard[4] === winnerSymbol &&
      scoreBoard[7] === winnerSymbol
    ) {
      alert(`${winner} wins!!`);
    } else if (
      scoreBoard[2] === winnerSymbol &&
      scoreBoard[4] === winnerSymbol &&
      scoreBoard[6] === winnerSymbol
    ) {
      alert(`${winner} wins!!`);
    } else if (
      scoreBoard[2] === winnerSymbol &&
      scoreBoard[5] === winnerSymbol &&
      scoreBoard[8] === winnerSymbol
    ) {
      alert(`${winner} wins!!`);
    } else if (
      scoreBoard[3] === winnerSymbol &&
      scoreBoard[4] === winnerSymbol &&
      scoreBoard[5] === winnerSymbol
    ) {
      alert(`${winner} wins!!`);
    } else if (
      scoreBoard[6] === winnerSymbol &&
      scoreBoard[7] === winnerSymbol &&
      scoreBoard[8] === winnerSymbol
    ) {
      alert(`${winner} wins!!`);
    }
  };

  const resetBoard = () => {
    scoreBoard = Array(9).fill("?");
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
