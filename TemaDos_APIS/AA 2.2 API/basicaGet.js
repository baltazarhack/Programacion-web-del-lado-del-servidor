//Kelvin Baltazar Pino Ake//
//ISC-8B//

import axios from "axios";

const obtenerUsuario = async () => {
    try {
        const response = await axios.get(
            'https://reqres.in/api/users/4',
            {
                headers: {
                    'x-api-key': '713112867f51178d158d3e5dcfaf2c59',
                    'X-Reqres-Env': 'prod'
                }
            }
        );

        console.log('Datos del usuario:', response.data);

    } catch (error) {
        console.error(
            'Error al obtener datos del usuario:',
            error.response?.data || error.message
        );
    }
};

obtenerUsuario();