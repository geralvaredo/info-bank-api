const https = require('https'); // Importar el módulo https

const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Ruta para realizar la solicitud GET a la URL específica
app.get('/api/bcra', async (req, res) => {
  try {
    // URL del endpoint al que deseas hacer la solicitud GET
    const apiUrl = 'https://api.bcra.gob.ar/estadisticas/v1/principalesvariables';

    // Configurar los encabezados de la solicitud GET
    const headers = { 'Accept-Language': 'es-AR' };

    // Realizar la solicitud GET a la URL específica utilizando Axios
    const apiResponse = await axios.get(apiUrl, { headers, httpsAgent: new https.Agent({ rejectUnauthorized: false }) });


    // Enviar los datos obtenidos como respuesta
    res.status(200).json(apiResponse.data);
  } catch (error) {
    // Manejar errores en la solicitud a la URL específica
    console.error('Error al hacer la solicitud a la URL específica:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Iniciar el servidor Express
app.listen(port, () => {
  console.log(`Servidor API iniciado en http://localhost:${port}`);
});





