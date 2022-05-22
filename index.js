const openMenuIcon = document.getElementById("menu-icon-open");
const bodyElement = document.querySelector("body");
const closeMenuIcon = document.getElementById("menu-icon-close");
const openFeatures = document.getElementById("icon-arrow1");
const openCompany = document.getElementById("icon-arrow2");
const wmm = window.matchMedia("(min-width: 426px)");
const hero = document.querySelector("main img");
const sect = document.querySelector("section");

openMenuIcon.addEventListener("click", menuHandler);
closeMenuIcon.addEventListener("click", menuHandler);
openFeatures.addEventListener("click", (e) =>
  featuresHandler(".features-options", e)
);
openCompany.addEventListener("click", (e) =>
  featuresHandler(".company-options", e)
);

if (wmm.matches) {
  hero.setAttribute("src", "./src/images/hero-desktop");
  let newTitle = document.createElement('h1')
  newTitle.innerHTML = 'Make<br>remote work'
  let title = document.querySelector('section h1')
   sect.replaceChild(newTitle,title)

}

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

function featuresHandler(classString, event) {
  let featureOptions = document.querySelector(classString);
  let displayValue =
    window.getComputedStyle(featureOptions).getPropertyValue("display") ==
    "none"
      ? "block"
      : "none";

  featureOptions.style.display = displayValue;

  if (displayValue == "block") {
    event.target.setAttribute("src", "./src/images/icon-arrow-up.svg");
  } else {
    event.target.setAttribute("src", "./src/images/icon-arrow-down.svg");
  }
}
