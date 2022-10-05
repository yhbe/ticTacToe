const playerFactory = (name, symbol) => {
  const sayHello = () => {
    return `Hello, My name is ${name}, and this is my symbol ${symbol} `;
  };
  return { name, symbol, sayHello };
};

const player1 = playerFactory("P1", "X");
const player2 = playerFactory("P2", "O");

const gameBoard = (() => {
  let scoreBoard = Array(9).fill("?");
  const container = document.querySelector(".container");
  const updateBoard = () => {
    scoreBoard.forEach((score) => {
      let div = document.createElement("div");
      div.innerHTML = score;
      container.append(div);
    });
  };
  return { scoreBoard, updateBoard };
})();

gameBoard.updateBoard();
