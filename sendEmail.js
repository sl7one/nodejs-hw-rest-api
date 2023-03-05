const { MAIL_PASSWORD } = process.env;

const nodemailer = require('nodemailer');

const nodemailerConfig = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'sl7one@meta.ua',
    pass: MAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const html = '<p>Пришла новая заявка с сайта</p>';

const email = {
  to: 'sl7one@gmail.com',
  from: 'sl7one@meta.ua',
  subject: 'Письмо с сайта',
  html,
};

module.exports = { transporter };
