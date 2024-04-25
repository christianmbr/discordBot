import axios from 'axios'
const API_URL = 'https://history.muffinlabs.com/date'

export const getEvents = async (date = null) => {
  try {
    const apiEndPoint = date
      ? `${API_URL}/${date.month}/${date.day}`
      : `${API_URL}/${new Date().getMonth() + 1}/${new Date().getDate()}`
    const { data } = await axios.get(apiEndPoint)
    const events = {
      day: data.date,
      num: data.data.Events.length,
      show: data.data.Events.slice(0, 5).map(event => `**Año ${event.year}**: ${event.text}`)
    }
    return `
**Se han detectado ${events.num} eventos el dia ${events.day}.**

${
  events.show.join(`

`)}
`
  } catch (error) {
    console.error(error.message)
    return 'Algo salio mal mani!'
  }
}
