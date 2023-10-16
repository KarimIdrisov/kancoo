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
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: "KANCOO Contact Form",
    html: `
      <p><b>Name</b>: ${name}</p>
      <p><b>Email</b>: <a href="mailto:${email}">${email}</a></p>
      <p><b>Phone</b>: <a href="tel:${tel}">${tel}</a></p>
      <p><b>Message</b>: ${message}</p>
    `,
    attachments
  }
  transporter.sendMail(mailOptions, (err, info)=>{
    if(err){
      console.error("Uh oh - email couldn't be sent: \n", err)
      return 1
    }
    else console.log("Email sent: ", info.response)
  })
  return 0
}