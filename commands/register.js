import { REST, Routes } from 'discord.js'
import configuration from '../configuration.js'

const clientId = configuration.clientId
const guildId = configuration.guildId
const discToken = configuration.discToken

// Array con los comandos de barra diagonal
const commands = [
  {
    name: 'chiste',
    description: 'Un chiste descarado del Uni mecanico vasado.'
  }
]

// Instancia de REST para registrar los comandos
const rest = new REST({ version: '10' }).setToken(discToken);

// Registra los comandos
(async () => {
  try {
    console.log('Registrando comandos...')
    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands }
    )
    console.log('Comandos registrados exitosamente!')
  } catch (error) {
    console.error(error.message)
  }
})()
