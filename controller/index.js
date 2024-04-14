/* eslint-disable no-case-declarations */
import { sayJoke, saveJoke } from './jokeController.js'

export const index = async (interaction) => {
  if (!interaction.isChatInputCommand()) return null

  switch (interaction.commandName) {
    case 'chiste':
      await interaction.reply(await sayJoke())
      break
    case 'aprendechiste':
      interaction.reply(await saveJoke(interaction.options.getString('chiste'), interaction.user.username))
      break
    default:
      throw console.error('That commandName does not exist!')
  }
}
