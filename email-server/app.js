const sgMail = require("@sendgrid/mail");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8005;

app.post("/email", (req, res) => {
  const { emailFrom, name, message } = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "seila191@gmail.com",
    from: "luanpoppe.tech@gmail.com",
    subject: `Email from ${name} - ${emailFrom}`,
    text: `${message}\n\n${emailFrom}`,
  };
  sgMail
    .send(msg)
    .then(() => {
      return res.send({
        msg: "Email enviado",
      });
    })
    .catch((error) => {
      console.error(error);
      return res.send(error);
    });
});

app.listen(PORT, () => console.log(`Server initiated on port ${PORT}`));
