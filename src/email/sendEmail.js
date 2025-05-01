
import nodemailer from "nodemailer";
import envsConfig from "../config/envs.config.js";

export const sendEmail = async (template, subject, email) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
      user: "profeluismeradev@gmail.com",
      pass: envsConfig.GMAIL_PASS
    }
  })

  // Configuramos envío del email

  await transport.sendMail({
    from: "profeluismeradev@gmail.com",
    to: email,
    subject: subject,
    html:template,

  })
}