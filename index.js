const openMenuIcon = document.getElementById("menu-icon-open");
const bodyElement = document.querySelector("body");
const closeMenuIcon = document.getElementById("menu-icon-close");

openMenuIcon.addEventListener("click", menuHandler);
closeMenuIcon.addEventListener("click", menuHandler);

function menuHandler() {
  let navElement = document.querySelector("nav");
  let childNodes = Array.from(bodyElement.children);
  let comptStyle =
    window.getComputedStyle(navElement).getPropertyValue("display") == "none"
      ? "block"
      : "none";
  navElement.style.display = comptStyle;

  handleWithMenuOpenClass(childNodes, comptStyle);
}

function handleWithMenuOpenClass(nodes, displayValue) {
  for (let i = 0; i < nodes.length; i++) {
    if (i != 1) {
      if (displayValue == "block") {
        nodes[i].className = "menu-open";
      } else {
        nodes[i].className = "";
      }
    }
  }
}
