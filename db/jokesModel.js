import { Schema, model } from 'mongoose'

const joke = new Schema({
  joke: {
    type: String,
    required: true,
    unique: false
  },
  user: {
    type: String,
    required: true,
    unique: false
  }
},
{
  versionKey: false,
  timestamps: true
})

export default model('Joke', joke)
