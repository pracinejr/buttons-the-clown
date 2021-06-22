import { fetchServiceRequests } from "./dataAccess.js";
import { ButtonsTheClown } from "./ButtonsTheClown.js";

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("stateChanged", (customEvent) => {
  render();
});

const render = () => {
  fetchServiceRequests().then(() => {
    mainContainer.innerHTML = ButtonsTheClown();
  });
};

render();
