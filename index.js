import { Client, Events, GatewayIntentBits } from 'discord.js'
import { sayJoke } from './utils/jokesBook.js'
import configuration from './configuration.js'

const discToken = configuration.discToken
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// Using commands.
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return null
  if (interaction.commandName === 'chiste') {
    await interaction.reply(sayJoke(interaction))
  }
})

// When the client is ready, run this code (only once).
client.once(Events.ClientReady, readyClient => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`)
})

client.login(discToken)
