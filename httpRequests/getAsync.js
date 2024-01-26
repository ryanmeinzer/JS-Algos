// basic GET method with only required arg (path)
async function logProfile() {
    // fetches JSON, returns promise that resolves with response object
    const response = await fetch("http://example.com/profile.json")
    // parses JSON (string) then returns 2nd promise that resolves by converting JSON to JS obj
    const profile = await response.json()
    console.log(profile)
}
logProfile() 