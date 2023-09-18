const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Configura bodyParser para procesar los datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ruta para procesar el formulario y enviar el correo
app.post('/enviar', (req, res) => {
  const { nombre, email, mensaje } = req.body;

  // Configura el transporter de nodemailer para enviar correos
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
    user: 'pablomrisi@hotmail.com',
    pass: 'tmila23142314',
    },
  });

  // Define el correo electrónico que se enviará
  const mailOptions = {
    from: 'tu_correo@hotmail.com',
    to: 'pablomrisi@hotmail.com',
    subject: 'Mensaje de contacto desde el formulario',
    text: `Nombre: ${nombre}\nCorreo Electrónico: ${email}\nMensaje: ${mensaje}`,
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.send('Correo enviado con éxito');
    }
  });
});

// Inicia el servidor en el puerto 3000 (o el puerto que prefieras)
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
