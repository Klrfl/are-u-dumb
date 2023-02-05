let openModal = document.getElementById("open-modal");
let testModal = document.getElementById("test-modal");
let dumbModal = document.getElementById("dumb-modal");

let dumdumYes = document.querySelector(".dumb-button--yes");
let dumdumNo = document.querySelector(".dumb-button--no");

openModal.addEventListener("click", () => {
  testModal.showModal();
});

// if answer == yes
dumdumYes.addEventListener("click", () => {
  dumbModal.showModal();
});

// if no
dumdumNo.addEventListener("click", () => {
  let posX = Math.round(Math.random() * 200);
  let posY = Math.round(Math.random() * 120);
  let minusPlus = Math.round(Math.random());

  // if it's time to generate minus num
  if (minusPlus) {
    posX = -posX;
    posY = -posY;
  } else {
    posX = -posX;
  }

  dumdumNo.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
});

dumbModal.addEventListener("close", () => {
  dumdumNo.style.transform = "none";
});
