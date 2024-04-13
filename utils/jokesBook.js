const jokesBook = [
  'Como se le dice a un niño con síndrome de Down? Fuerzas especiales.',
  'Que hace Romeo Santos en su celular? Va chateando.',
  '¿Qué le regalaron a una niña sin brazos? No sé... No lo ha abierto.',
  'Había una vez una pinia colada y la sacaron de la fila.',
  'Como se llama el pez más grande? El pezón.',
  '¿Cuál era la serie animada favorita del capitán que manejaba el titánica? Timon y pumba.',
  '¿Cuál es el animal más Antiguo? El pingüino porque está en blanco y negro.',
  '¿Como se le llama al pez que se cae de un cuarto piso? Aaaaaatún.',
  'Como se dice puerta en ingles? Door. Y el que la vende? Vendedoor. Y el que la compra? Compradoor.',
  'Saben cuál es el árbol más terrorífico... El bambú.',
  'Todo en la vida es pasajero... Menos el chofer.',
  'Había un niño que odiaba los vegetales entonces desconecto a su abuelo.',
  'Que hace barbi en una parrillada... Barbiquiu.',
  'Como toma la sopa Socrates/ Con platon.',
  'Cuál es el único pan que se lava.... El pantalón.',
  'Intente conquistar a una programadora, pero no sé de java. jajajaja',
  'Usted es tan flaco, que las inyecciones se la ponen en la carne del almuerzo.',
  'A tu mamá le dicen la billetera. Se abre por plata.',
  '¿Se saben el chiste de pocoyo? Yo tampoco.',
  'Que guarda Dark Blader en su nevera? Helado oscuro.',
  '¿Saben porque no hay libros sobre el cansancio? Porque están agotados.',
  '¿Porque no lanzan bombas nucleares en África? Porque va en contra de los derechos humanos.',
  '¿Qué le dice un tomate a otro tomate? Tomatelaaaaaa.',
  'En que se parece un ginecólogo con un repartidor de pizza. En que ambos la huelen, pero no se la pueden comer.',
  'Cuál es el yogurt más lento? El de mora.',
  'Que tiene el teléfono de Woody. Un mensaje de voz',
  '¿Ustedes saben porque me llaman el piano maldito? Porque me toco solo en las noches.',
  'Que le dice un sacerdote a mi tío... Mira ese niño todo qlon.',
  'Usted es bobo o su mamá calienta las arepas detrás de la nevera.',
  'Usted es bobo o su mamá que cuela el Frutiño.',
  '¿En qué se parece el sexo con las lentejas? En que nadie lo hace mejor que mi abuela.',
  '¿Cuando va una mujer a la luna? cuando tengan que limpiarla.',
  '¿Cuál es la diferencia entre una bicicleta y un negro? en qué la bicicleta no se queja cuando se encadena.',
  '¿Porque una feminista no puede entrar al ejército? porque abortaría la misión.',
  '¿Porque una niña sin brazos no puede abrazar a su papa? Porque no tiene papá.',
  'En que se parece Buzz Lightyear a mi tío? En que los dos tienen la cabeza morada.'
]

export const sayJoke = async (interaction, jokes = jokesBook) => {
  console.log('Lo pide: ', interaction.user.username)
  const indexJoke = Math.floor(Math.random() * jokes.length)
  return jokes[indexJoke]
}
