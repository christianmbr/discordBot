import { translate } from '../services/translatorApi.js'
import { validateTextToTranslate } from '../schemas/translateController.schema.js'

export const translateText = async (text, from, to) => {
  // Validate inputs!
  const validateInputs = validateTextToTranslate.validate({ text, from, to })
  const languages = { french: 'fr', spanish: 'es', english: 'en' }

  if (!validateInputs.error) {
    const response = await translate(text, languages[from], languages[to])
    const translatedText = response.data.data.translatedText
    return `Ahi tiene: ${translatedText}` || 'Mani, no pude con ese texto.'
  }
  return 'Mani, fijese si los datos que me pasaste estan bien escritos!'
}
