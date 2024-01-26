// basic POST method
function postData(url = "", data = {}) {
  // with optional second config param (init obj)
  return fetch(url, {
    // GET, POST, PUT, DELETE
    method: "POST",
    headers: {
      // tells server request is JSON
      "Content-Type": "application/json",
    },
    // "Content-Type" header type must match body data type
    // Converts data object to JSON (string) for request body
    body: JSON.stringify(data),
    // default options: 
    // method: "GET", mode: "cors", cache: "default", credentials: "same-origin", redirect: "follow", referrerPolicy: "no-referrer"
  })
  // parses JSON string response then returns 2nd promise that resolves by converting JSON to JS obj
  .then(response => response.json())
}

// POSTs data as JSON, receives promise that resolves with response JS object
postData("https://example.com/answer", { answer: 13 })
  // awaits promise to resolve
  .then((data) => {
  // data was parsed by 2nd promise call (`response.json()`)
  console.log(data)
})