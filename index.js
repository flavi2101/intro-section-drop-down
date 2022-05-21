const openMenuIcon = document.getElementById("menu-icon-open");
const bodyElement = document.querySelector("body");
const closeMenuIcon = document.getElementById("menu-icon-close");
const openFeatures = document.getElementById("icon-arrow");
const openCompany = document.getElementById('icon-arrow2')

openMenuIcon.addEventListener("click", menuHandler);
closeMenuIcon.addEventListener("click", menuHandler);
openFeatures.addEventListener("click", ()=>featuresHandler(".features-options"));
openCompany.addEventListener("click", ()=> featuresHandler(".company-options"));

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

function featuresHandler(classString) {
  let featureOptions = document.querySelector(classString);
  let displayValue =
    window.getComputedStyle(featureOptions).getPropertyValue("display") ==
    "none"
      ? "block"
      : "none";

  featureOptions.style.display = displayValue;

  if (displayValue == "block") {
    openFeatures.setAttribute("src", "./src/images/icon-arrow-up.svg");
  } else {
    openFeatures.setAttribute("src", "./src/images/icon-arrow-down.svg");
  }
}
