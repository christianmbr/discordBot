import env from 'dotenv'

env.config()

export default {
  discToken: process.env.DISCORD_TOKEN,
  clientId: process.env.CLIENT_ID,
  guildId: process.env.GUILD_ID
}