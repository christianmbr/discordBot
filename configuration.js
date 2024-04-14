import env from 'dotenv'

env.config()

export default {
  discToken: process.env.DISCORD_TOKEN,
  clientId: process.env.CLIENT_ID,
  guildIdMorning: process.env.GUILD_ID_MORNING,
  guildIdTreeHouse: process.env.GUILD_ID_TREEHOUSE,
  mongoDB: {
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    cluster: process.env.MONGO_CLUSTER,
    database: process.env.MONGO_DATABASE
  },
  rapidApi: {
    key: process.env.RAPID_KEY
  }
}
