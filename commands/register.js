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
    options: [
      {
        name: 'chiste',
        description: 'Mani, escribe aqui tu chistecito!',
        type: 3,
        require: true
      }
    ]
  },
  {
    name: 'cuentamischistes',
    description: 'Mani, esto cuenta un chiste que alguien guardo!'
  },
  // To translate.
  {
    name: 'traduceme',
    description: 'Mani, yo soy espectacular en los idiomas.',
    options: [
      {
        name: 'traducir',
        description: 'Mani, ponme el texto que quieras que tin si o que. Pruedo traducir french, spanish y english.',
        type: 3,
        require: true
      },
      {
        name: 'del',
        description: 'A que idioma esta el texto mani? Soy bobo entonces me tienes que escribir french, spanish o english.',
        type: 3,
        require: true
      },
      {
        name: 'a',
        description: 'A que idioma quiere que lo tin mi rey? Pon french, spanish o englis',
        type: 3,
        require: true
      }

    ]
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
