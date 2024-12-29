// api/email.js
const sgMail = require("@sendgrid/mail");

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { emailFrom, name, message } = req.body;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "seila191@gmail.com",
      from: "luanpoppe.tech@gmail.com",
      subject: `Email from ${name} - ${emailFrom}`,
      text: `${message}\n\n${emailFrom}`,
    };

    try {
      await sgMail.send(msg);
      return res.status(200).json({ msg: "Email enviado" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Email failed to send" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
};
