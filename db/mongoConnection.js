import mongoose from 'mongoose'
import conf from '../configuration.js'
// Connect to mongo DB.
const mongoConnectionString = `mongodb+srv://${conf.mongoDB.user}:${conf.mongoDB.password}@${conf.mongoDB.cluster}.vqipidq.mongodb.net/${conf.mongoDB.database}?retryWrites=true&w=majority`

const connect = () => {
  mongoose.connect(mongoConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Db is connected!')
  }).catch(error => {
    console.error(error)
  })
}

export default {
  connect
}
