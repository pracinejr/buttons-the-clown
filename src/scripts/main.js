import { fetchRequests } from "./dataAccess.js";
import { ButtonsTheClown } from "./ButtonsTheClown.js";

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("stateChanged", (customEvent) => {
  render();
});

const render = () => {
  fetchRequests().then(() => {
    mainContainer.innerHTML = ButtonsTheClown();
  });
};

render();
