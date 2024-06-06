const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "albouabidimouadh@gmail.com", // Your email
    pass: "icjp hhnu uasj sgsg", // Your email password or app-specific password
  },
});

const submitContactForm = (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const mailOptions = {
    from: email, // Sender's email
    to: "albouabidimouadh@gmail.com", // Your email to receive the contact messages
    subject: `Contact Form Submission: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
      return res.status(500).json({ message: "Failed to send message" });
    } else {
      console.log("Email sent: ", info.response);
      return res.status(200).json({ message: "Message sent successfully" });
    }
  });
};

module.exports = { submitContactForm };
