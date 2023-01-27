const navList = document.querySelector("nav>ul");
navList.addEventListener("click", (e) => {
  const activeElem = document.querySelector(".activated");
  if (activeElem.classList.contains("activated")) {
    activeElem.classList.remove("activated");
  }
  e.target.classList.add("activated");
});

const closeButton = document.querySelector(".close-button");

closeButton.addEventListener("click", ()=>{
  // TODO
});
