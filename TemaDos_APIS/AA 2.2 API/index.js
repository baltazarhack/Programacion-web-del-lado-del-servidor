//Kelvin Baltazar Pino Ake//
//ISC-8B//
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(respuesta => {
        if (!respuesta.ok){
            throw new Error('Respuesta del servidor fallida' + respuesta)
        }

        return respuesta.json()
    })
    .then(datos => {
        console.log('Datos recibidos:', datos)
    })
    .catch(error => {
        (console.error('Error al hacer la solicitud:', error))
    })
