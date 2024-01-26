// POST JSON data
async function postJSON(data) {
  try {
    const response = await fetch("https://example.com/profile", {
      // could also use PUT
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      // Converts data object to JSON (string) for request body
      body: JSON.stringify(data),
    })
    // ensure http response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // parses JSON then returns 2nd promise that resolves by converting JSON to JS obj
    const result = await response.json()
    // log success
    console.log("Success:", result)
  // catch any errors (eg network or parsing)
  } catch (error) {
    // log error
    console.error("Error:", error)
  }
}

// JS obj
const data = { username: "ryan" }
postJSON(data)