"use server"
import nodemailer from 'nodemailer'

interface File {
  filename: string
  content: string
  type: string
  encoding: string
}

export default async (name: string, tel: string, email: string, message: string, attachments: File[]) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    secure: false,
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  const res = await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: [String(process.env.EMAIL_TO_1), String(process.env.EMAIL_TO_2)],
    subject: "KANCOO Contact Form",
    html: `
      <p><b>Name</b>: ${name}</p>
      <p><b>Email</b>: <a href="mailto:${email}">${email}</a></p>
      <p><b>Phone</b>: <a href="tel:${tel}">${tel}</a></p>
      <p><b>Message</b>: ${message}</p>
    `,
    attachments
  })
    .then(() => {
      console.log("Email sent!")
      return true
    })
    .catch(err => {
      console.log("Uh-oh, there was an error sending the email:\n", err)
      return false
    })

  return res
}