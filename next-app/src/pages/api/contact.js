// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  const { fullName, email, message, mailServiceConfiguration } = req.body;

  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    ...mailServiceConfiguration,
    auth: {
      user: process.env.ANTONIO_EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailData = {
    from: email,
    to: "mbarac.test@gmail.com",
    replyTo: email,
    subject: `Portfolio message from ${fullName}`,
    text: JSON.stringify(req.body) + " | Sent from: " + email,
    html: `<div>
      <p><b>Sender: <b>${fullName}<p>
      <p><b>E-mail: <b>${email}<p>
      <p><b>Message: <b>${message}<p>
    </div>`,
  };

  try {
    const info = await transporter.sendEmail(mailData);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "max-age=180000");
    res.end(JSON.stringify(info));
  } catch (error) {
    res.json(error);
    res.status(500).end();
  }
}
