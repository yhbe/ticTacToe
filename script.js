const playerFactory = (name, symbol) => {
  const sayHello = () => {
    return `Hello, My name is ${name}, and this is my symbol ${symbol} `;
  };
  return { name, symbol, sayHello };
};

const player1 = playerFactory("P1", "X");
const player2 = playerFactory("P2", "O");
let activePlayer = player1;

const gameBoard = (() => {
  const scoreBoard = Array(9).fill("?");
  const container = document.querySelector(".container");

  const renderBoard = () => {
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }
    scoreBoard.forEach((score, i) => {
      let div = document.createElement("div");
      div.innerHTML = score;
      div.setAttribute("data-id", i);
      div.addEventListener("click", updateBoard);
      container.append(div);
    });
  };

  function updateBoard() {
    const id = this.getAttribute("data-id");
    scoreBoard[id] = activePlayer.symbol;
    renderBoard();
    updatePlayer();
  }

  const updatePlayer = () => {
    if (activePlayer == player1) {
      activePlayer = player2;
    } else activePlayer = player1;
  };

  return { scoreBoard, renderBoard };
})();

gameBoard.renderBoard();
