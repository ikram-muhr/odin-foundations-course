const container = document.querySelector(".container");
const assignNumberOfSquareBtn = document.querySelector(".assignNumberOfSquareBtn");
const resetBtn = document.querySelector(".resetBtn");
let numberOfSquare = 0;

const makeSquare = () => {
  numberOfSquare = Number(prompt("Input How Many Square you want? (Max: 100)"));

  if (numberOfSquare >= 1 && numberOfSquare <= 100) {
    // Remove all children from the container by replacing them with “”
    container.innerHTML = "";

    for (let i = 0; i < numberOfSquare; i++) {
      const childContainer = document.createElement("div");
      childContainer.classList.add("row");

      for (let j = 0; j < numberOfSquare; j++) {
        const squares = document.createElement("div");
        squares.classList.add("square");

        childContainer.appendChild(squares);
      }

      container.appendChild(childContainer);
    }
    document.getElementsByClassName("square");
  } else {
    alert("Please enter a number between 1 and 100");
    makeSquare();
  }
};

assignNumberOfSquareBtn.addEventListener("click", () => {
  makeSquare();
});

resetBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
    square.style.opacity = 0; // Reset opacity to 0 for progressive darkening
  });
})

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("square")) {
    const randomIndexForRGB = () => Math.round(Math.random() * 255);
    const r = randomIndexForRGB();
    const g = randomIndexForRGB();
    const b = randomIndexForRGB();
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // Increase darkness by 10% (As instructed: “progressive darkening”)
    // We take the current opacity; if it's empty (first interaction), set it to 0
    let currentOpacity = parseFloat(e.target.style.opacity) || 0;
    if (currentOpacity < 1) {
      e.target.style.opacity = currentOpacity + 0.1;
    }
  }
});
