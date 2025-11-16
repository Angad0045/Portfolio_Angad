const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.post("/sendMail", async (req, res) => {
  const { name, email, message } = req?.body;

  if (!name || !email || !message)
    return res.status(400).json("All fields are required");

  try {
    const transporter = nodemailer.createTransport({
      secure: true,
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
});

app.listen(port, () => {
  console.log("Server Running :)");
});

// function sendMail(to, sub, msg) {
//   transporter.sendMail({
//     to: to,
//     subject: sub,
//     html: msg,
//   });

//   console.log("Email Sent!");
// }

// sendMail(
//   "angadpatil142003@gmail.com",
//   "Test Mail",
//   "This mail is for testing purpose"
// );
