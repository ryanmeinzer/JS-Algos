// Basic GET method with only required arg (path)
function logProfile() {
    // fetches JSON, returns promise that resolves with response object
    fetch("http://example.com/profile.json")
        // parses JSON (string) then returns 2nd promise that resolves by converting JSON to JS obj
        .then(response => response.json())
        .then(profile => console.log(profile))
}
logProfile()