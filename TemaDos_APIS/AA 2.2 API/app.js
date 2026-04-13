//Kelvin Baltazar Pino Ake//
//ISC-8B//

import axios from 'axios'

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(respuesta => {
        console.log('Datos recibidos', respuesta)
    })
    .catch(error => {
        console.error('Error al recibir la solicitud', error)
    })