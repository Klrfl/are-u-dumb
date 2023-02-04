let openModal = document.getElementById("open-modal");
let testModal = document.getElementById("test-modal");
let dumbModal = document.getElementById("dumb-modal");

let dumdumYes = document.querySelector(".dumb-button--yes");
let dumdumNo = document.querySelector(".dumb-button--no");

openModal.addEventListener("click", () => {
  testModal.classList.toggle("active");
});

dumdumYes.addEventListener("click", () => {
  testModal.classList.toggle("active");
  dumbModal.classList.toggle("active");
});

dumdumNo.addEventListener("mouseenter", () => {
  // let randomPosSmall = Math.round(Math.random() * 50);
  let randomPosBig = Math.round(Math.random() * 100);
  let randomPosBeeg = Math.round(Math.random() * 100);

  dumdumNo.style.position = "absolute";
  dumdumNo.style.right = `${randomPosBig}%`;
  dumdumNo.style.top = `${randomPosBeeg}%`;
  // dumdumNo.style.setProperty("transform", `translateX(${randomPosBig}px)`, "");
  // dumdumNo.style.setProperty("transform", `translateY(${randomPosBig}px)`, "");
});

dumbModal.addEventListener("click", () => {
  dumbModal.classList.toggle("active");
  dumdumNo.style.position = "static";
});
