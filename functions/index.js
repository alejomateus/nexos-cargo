const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
admin.initializeApp();
require('dotenv').config();
const { SENDER_EMAIL, SENDER_PASSWORD } = process.env;
/**
* Here we're using Gmail to send
*/
let transporter = nodemailer.createTransport({
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

    // getting dest email by query string
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
    let html = `<h2><strong>${subject}</strong></h2><br><br>`;
    Object.keys(req.body).forEach(param => {
      html += `<h4><strong>${param}:</strong> ${req.body[param]}</h4><br>`;
    });
    const mailOptions = {
      from: SENDER_EMAIL,
      to: SENDER_EMAIL,
      subject,
      html
    };

    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString() + SENDER_EMAIL + SENDER_PASSWORD);
      }
      return res.send('Sended' + JSON.stringify(req.body));
    });
  });
});
