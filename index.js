const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Cambia esto al puerto que desees

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/enviar-consulta', async (req, res) => {
    const nombre = req.body.nombre;
    const telefono = req.body.telefono;
    const correo = req.body.correo;
    const consulta = req.body.consulta;

    // Configuración del transporter para Hotmail (Outlook)
    const transporter = nodemailer.createTransport({
        host: 'smtp.live.com',
        port: 587,
        secure: false,
        auth: {
            user: 'pablomrisi@hotmail.com', // Cambia esto a tu dirección de correo Hotmail
            pass: 'Mila23142314' // Cambia esto a tu contraseña de correo Hotmail
        }
    });

    const mailOptions = {
        from: 'pablomrisi@hotmail.com',
        to: 'polka25@hotmail.com', // Cambia esto al correo destinatario
        subject: 'Nueva consulta de contacto',
        text: `Nombre: ${nombre}\nTeléfono: ${telefono}\nCorreo electrónico: ${correo}\nConsulta:\n${consulta}`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Consulta enviada: ' + info.response);
        res.status(200).send('Consulta enviada con éxito.');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al enviar la consulta.');
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
