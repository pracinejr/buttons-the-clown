import { getServiceRequests, completedService } from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (click) => {
  if (click.target.id.startsWith("request--")) {
    const [, requestId] = click.target.id.split("--");
    completedService(parseInt(requestId));
  }
});

export const ServiceRequests = () => {
  const serviceRequests = getServiceRequests(); // grab the local state of the requests data

  let html = `
        <ul>
            ${serviceRequests
              .map((requestToList) => {
                return `<li>${requestToList.parentName} and their child ${requestToList.ChildName} are having a birthday party at ${requestToList.address} for ${requestToList.partyLength} hrs with ${requestToList.kidsAtParty} kids.<button class="request__delete"
                id="request--${requestToList.id}">
            Deny
        </button></li>`;
              })
              .join("")}
        </ul>`;

  return html;
};

//       "parentName": "123",
//       "ChildName": "123",
//       "kidsAtParty": "123",
//       "address": "123",
//       "partyDate": "2021-07-08",
//       "partyLength": "123",
//       "id": 1
