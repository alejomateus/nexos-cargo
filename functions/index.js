const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
admin.initializeApp(functions.config().firebase);
require('dotenv').config();
const { SENDER_EMAIL, SENDER_PASSWORD } = process.env;
/**
* Here we're using Gmail to send
*/
let transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: SENDER_EMAIL,
    pass: SENDER_PASSWORD
  }
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (request.method !== "POST") {
      response.send(405, 'HTTP Method ' + request.method + ' not allowed');
    }
    const type = req.query.type;
    let subject = "";
    switch (type) {
      case "cellar":
        subject = "Cotización de Bodega";
        break;
      case "cotization":
        subject = "Cotizacion";
        break;
      case "contact":
        subject = "Formulario de contacto";
        break;
    }
    let html = `<strong>${subject}</strong><br><br>`;
    Object.keys(req.body).forEach(param => {
      html = `<strong>${param}:</strong> ${param}<br>`;
    });
    const mailOptions = {
      from: SENDER_EMAIL,
      to: SENDER_EMAIL,
      subject,
      html
    };
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send('Sended');
    });
  });
});
