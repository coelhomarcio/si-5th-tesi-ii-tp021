import "./style.css";

import { Welcome } from "./welcome";

const consoleMessage: string = "Hello World!";

for (let i = 0; i <= 11; i++) {
  console.log(consoleMessage[i]);
}

function start(this: HTMLElement, event: Event): void {
  function launch(): void {
    paragraph.innerHTML = "Launch!";
    setTimeout(() => {
      paragraph.innerHTML = "&#128640;";
      paragraph.classList.add("launch");
      setTimeout(() => {
        paragraph.innerHTML = "";
        button.addEventListener("click", start);
        button.classList.remove("disable");
        paragraph.classList.remove("launch");
      }, 3000);
    }, 1000);
  }

  button.removeEventListener("click", start);
  button.classList.add("disable");

  const paragraph: HTMLElement = document.querySelector('div:last-of-type > p');
  let paragraphContent: string;
  let tMinus: number = 10;
  let countdown = setInterval(() => {
    paragraphContent = "T-minus " + tMinus;
    paragraph.innerHTML = paragraphContent;
    tMinus--;
    if (tMinus < 0) {
      clearInterval(countdown);
      launch();
    }
  }, 1000);
}

const h1Title: string = "Typescript";
const buttonLabel: string = "START";
let welcome: Welcome = new Welcome("visitor");

const main: HTMLElement = document.querySelector("main");

main.innerHTML = `
<div>
  <h1>${h1Title}</h1>
  <p>${welcome.getMessage()}</p>
</div>
<div>
  <p></p>
  <button>${buttonLabel}</button>
</div>
`;

const button: HTMLElement = document.querySelector("div > button");

button.addEventListener("click", start);
