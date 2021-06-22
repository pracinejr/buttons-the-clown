const applicationState = {
  serviceRequest: [],
  requestService: [],
};

const API = "http://localhost:8088";

export const fetchServiceRequests = () => {
  return fetch(`${API}/serviceRequests`)
    .then((response) => response.json())
    .then((serviceRequest) => {
      applicationState.serviceRequest = serviceRequest;
    });
};

export const getServiceRequests = () => {
  return applicationState.serviceRequest.map((serviceRequest) => ({
    ...serviceRequest,
  }));
};

const mainContainer = document.querySelector("#container");

export const sendServiceRequests = (userServiceRequest) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userServiceRequest),
  };

  return fetch(`${API}/serviceRequests`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
};

export const completedService = (id) => {
  return fetch(`${API}/serviceRequests/${id}`, { method: "DELETE" }).then(
    () => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    }
  );
};
