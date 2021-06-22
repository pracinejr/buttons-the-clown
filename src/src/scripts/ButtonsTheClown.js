import { RequestForm } from "./RequestForm.js";
import { ServiceRequests } from "./ServiceRequests.js";

document.addEventListener("click", (event) => {
  const clickedItem = event.target;
  if (clickedItem.id === "requestServiceButton") {
    addRequestService();
  }
});

export const ButtonsTheClown = () => {
  return `
    <h1>Hire Buttons and Lollipop the Clowns</h1>
    
    <article class="
    <section class="serviceForm">
        ${RequestForm()}
    </section>

    <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${ServiceRequests()}
    </section>
    `;
};
