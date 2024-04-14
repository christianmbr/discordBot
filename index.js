import { Client, Events, GatewayIntentBits } from 'discord.js'
import mongoDB from './db/mongoConnection.js'
import conf from './configuration.js'
import { index } from './controller/index.js'

const client = new Client({ intents: [GatewayIntentBits.Guilds] })
// Mongo connect.
mongoDB.connect()

// Using commands.
client.on('interactionCreate', index)

// When the client is ready, run this code (only once).
client.once(Events.ClientReady, readyClient => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`)
})

client.login(conf.discToken)
