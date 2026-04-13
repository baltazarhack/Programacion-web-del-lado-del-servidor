//Kelvin Baltazar Pino Ake//
//ISC-8B//

import axios from "axios";

const ejecutarPrueba = async () => {
    try {
        // 🔹 1. LOGIN (POST)
        const loginResponse = await axios.post(
            "https://dummyjson.com/auth/login",
            {
                username: "emilys",
                password: "emilyspass"
            }
        );

        const token = loginResponse.data.accessToken;
        console.log("✅ Token obtenido:", token);

        // 🔹 2. USAR TOKEN CORRECTO
        const usuario = await axios.get(
            "https://dummyjson.com/auth/me",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        console.log("✅ Usuario autenticado:");
        console.log(usuario.data);

        // 🔹 3. PROBAR TOKEN INVÁLIDO
        const tokenInvalido = "123abc";

        await axios.get(
            "https://dummyjson.com/auth/me",
            {
                headers: {
                    Authorization: `Bearer ${tokenInvalido}`
                }
            }
        );

    } catch (error) {
        console.error("❌ Error con token inválido:");
        console.error(error.response?.data || error.message);
    }
};

ejecutarPrueba();