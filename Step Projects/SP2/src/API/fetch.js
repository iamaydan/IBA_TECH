const domain = "http://localhost:3002";

function fetchFabric(endpoint, method) {
  return async (params = {}) => {
    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    let getParams = "";
    if (method === "POST") {
      options.method = method;
      options.body = JSON.stringify(params);
    } else if (method === "GET") {
      getParams += "?";

      for (let key in params) {
        getParams += `${key}=${params[key]}&`;
      }
    }

    const res = await fetch(`${domain}${endpoint}${getParams}`, options);
    return res.json();
  };
}

export const getNotes = fetchFabric("/notes", "GET");
export const createNotes = fetchFabric("/notes", "POST");

// export const createNotes = fetchFabric("/notes", "PATCH");
// export const createNotes = fetchFabric("/notes", "DELETE");
