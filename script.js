const playerFactory = (name, symbol) => {
  const sayHello = () => {
    return `Hello, My name is ${name}, and this is my symbol ${symbol} `;
  };
  return { name, symbol, sayHello };
};

const player1 = playerFactory("P1", "X");
const player2 = playerFactory("P2", "O");

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
    scoreBoard[id] = player1.symbol;
    renderBoard();
  }
  return { scoreBoard, renderBoard };
})();

gameBoard.renderBoard();
