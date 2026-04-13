//Kelvin Baltazar Pino Ake//
//ISC-8B//

import axios from "axios";

const registrarUsuario = async () => {
    try {
        const respuesta = await axios.post(
            'https://reqres.in/api/register',
            {
                email: 'eve.holt@reqres.in',
                password: 'pistol'
            },
            {
                headers: {
                    'x-api-key': 'pro_27c4aeb079ef591a5470360fa137b993da234c015d17dcbd9003ad8ad372a1fa',
                    'X-Reqres-Env': 'prod'
                }
            }
        );

        console.log('Registro exitoso:', respuesta.data);

    } catch (error) {
        console.error('Error en el registro:', error.response?.data || error.message);
    }
};

registrarUsuario();