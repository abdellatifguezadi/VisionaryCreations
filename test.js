const container = document.querySelector(".btn");
const overlay = document.querySelector(".vd-overlay");

container.addEventListener("click", () => {
  overlay.classList.add("open");
  overlay.classList.remove("none");
});

overlay.addEventListener("click", () => {
    // console.log(overlay);

  overlay.classList.remove('open');
  overlay.classList.add("none");
  
});


