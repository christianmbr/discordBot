import Joke from '../db/jokesModel.js'

export const sayJoke = async () => {
  try {
    const jokes = await Joke.find({})
    const indexJoke = Math.floor(Math.random() * jokes.length)
    console.log('Se conto un chiste!')
    return `${jokes[indexJoke].joke} - chiste de ${jokes[indexJoke].user}`
  } catch (error) {
    console.error(error.message)
  }
}

export const saveJoke = async (joke, user) => {
  try {
    const savedJoke = await new Joke({ joke, user }).save()
    console.log('A joke was saved!', savedJoke)
    return 'Ya me aprendi el chistecito mani! Ta horrible pero ps me programaron asi.'
  } catch (error) {
    console.error(error.message)
    return 'No mani, no pude aprenderme ese chiste maluco.'
  }
}
