const axios = require('axios')

async function fetchJson(url, options = {}) {
  try {
    const response = await axios.get(url, options)
    return response.data
  } catch (e) {
    throw new Error(`fetchJson error: ${e.message}`)
  }
}

// තවත් utility functions මෙහෙ දාගන්න පුළුවන්

module.exports = {
  fetchJson,
  // add more utils here if needed
}
