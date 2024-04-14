import { REST, Routes } from 'discord.js'
import configuration from '../configuration.js'

const clientId = configuration.clientId
const discordServer = configuration.guildIdMorning
const discToken = configuration.discToken

// Array con los comandos de barra diagonal
const commands = [
  // Apartado de chistes
  {
    name: 'chiste',
    description: 'Un chiste descarado del Uni mecanico vasado.'
  },
  {
    name: 'aprendechiste',
    description: 'Mani, por si quieres guardar un chistecito melo.',
    options: [{
      name: 'chiste',
      description: 'Mani, escribe aqui tu chistecito!',
      type: 3,
      require: true
    }]
  },
  {
    name: 'cuentamischistes',
    description: 'Mani, esto cuenta un chiste que alguien guardo!'
  }
]

// Instancia de REST para registrar los comandos
const rest = new REST({ version: '10' }).setToken(discToken);

// Registra los comandos
(async () => {
  try {
    console.log('Registrando comandos...')
    await rest.put(
      // Routes.applicationGuildCommands(clientId, guildId),
      Routes.applicationGuildCommands(clientId, discordServer),
      { body: commands }
    )
    console.log('Comandos registrados exitosamente!')
  } catch (error) {
    console.error(error.message)
  }
})()
