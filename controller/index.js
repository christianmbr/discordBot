/* eslint-disable no-case-declarations */
import { sayJoke, saveJoke } from './jokeController.js'
import { translateText } from './translateController.js'

export const index = async (interaction) => {
  if (!interaction.isChatInputCommand()) return null

  switch (interaction.commandName) {
    case 'chiste':
      await interaction.reply(await sayJoke())
      break
    case 'aprendechiste':
      interaction.reply(await saveJoke(interaction.options.getString('chiste'), interaction.user.username))
      break
    case 'traduceme':
      interaction.reply(await translateText(
        interaction.options.getString('traducir'),
        interaction.options.getString('del'),
        interaction.options.getString('a')
      ))
      break
    default:
      throw console.error('That commandName does not exist!')
  }
}
