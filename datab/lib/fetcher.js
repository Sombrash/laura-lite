const fetch = require("node-fetch")

const fetchJson = async (url, body) => {
let response = await fetch(url, body)

let data = await response.json()
return data
}

module.exports = { fetchJson }