import axios from 'axios'
import conf from '../configuration.js'

export const translate = async (text, from, to) => {
  const encodedParams = new URLSearchParams()
  encodedParams.set('source_language', from)
  encodedParams.set('target_language', to)
  encodedParams.set('text', text)

  const options = {
    method: 'POST',
    url: 'https://text-translator2.p.rapidapi.com/translate',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': conf.rapidApi.key,
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    data: encodedParams
  }
  try {
    return await axios.request(options)
  } catch (error) {
    console.error(error.message)
    return false
  }
}
