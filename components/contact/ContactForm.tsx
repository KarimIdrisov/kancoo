"use client"
import FileUploadMobileSVG from "@/images/contact/file-upload-mobile.svg"
import ArrowRightMobileSVG from "@/images/contact/arrow-right-mobile.svg"
import FileUploadSVG from "@/images/contact/file-upload.svg"
import ArrowRightSVG from "@/images/contact/arrow-right.svg"
import CrossMobileSVG from "@/images/contact/cross-mobile.svg"
import CrossSVG from "@/images/contact/cross.svg"
import Image from "next/image"
import sendMail from "@/actions/sendMail"
import { ChangeEvent, FormEvent, useRef, useState } from "react"
import LoadingSVG from "@/images/contact/loading.svg"
import jsonContactForm_ru from "@/locales/components/contact-form/ru.json"
import jsonContactForm_en from "@/locales/components/contact-form/en.json"

interface File {
  filename: string
  content: string
  type: string
  encoding: string
}

export default ({ locale, popout }: { locale: string, popout?: () => void }) => {
  const locales: any = {
    ru: jsonContactForm_ru,
    en: jsonContactForm_en
  }
  
  const [name, setName] = useState("")
  const [tel, setTel] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [files, setFiles] = useState<globalThis.File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [redInputs, setRedInputs] = useState(false)
  const [formPending, setFormPending] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setFormPending(true)
    const attachments: File[] = []
    const promises: Promise<void>[] = []

    files.forEach((file, i) => {
      const reader = new FileReader()
      const promise: Promise<void> = new Promise((resolve, reject) => {
        reader.onload = () => {
          const result = reader.result as string
          attachments.push({
            filename: file.name,
            content: result.split(';base64,')[1],
            type: file.type,
            encoding: 'base64'
          })
          resolve()
        }
        reader.onerror = reject
      })
      promises.push(promise)
      reader.readAsDataURL(file)
    })

    Promise.all(promises).then(async () => {
      await sendMail(name, tel, email, message, attachments)
        .then(res => {
          if(res) window.location.href = `/${locale}`
          else {
            alert("There was an error sending the email")
            setFormPending(false)
          }
        })
    }).catch(error => console.error(error))
  }

  const handleFilesAdd = (e: ChangeEvent<HTMLInputElement>) => {
    const inputFiles = e.target.files
    const newFiles = []
    if(inputFiles)
      for(let i = 0; i < inputFiles.length; i++) newFiles.push(inputFiles[i])
    setFiles([...files, ...newFiles])
  }

  const handleFileRemove = (i: number) => {
    setFiles(files.filter((file, index) => index !== i))
  }

  return (
    <section className={`contact-form wrapper ${popout ? "popout" : ""}`}>
      { popout && <div className="bg" onClick={popout} /> }
      
      <div className="wrapper card">
        { popout && <div className="cross-cont" onClick={popout}>
          <Image className="cross mobile" src={CrossMobileSVG} alt="" />
          <Image className="cross" src={CrossSVG} alt="" />
        </div> }

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="title">{ locales[locale].title }</div>
          <div className="cont">
            <input className={redInputs ? "red" : ""} type="text" value={name} onChange={e => { setName(e.target.value); setRedInputs(false) }} placeholder={ locales[locale].name } required />
            <input className={redInputs ? "red" : ""} type="tel" value={tel} onChange={e => { setTel(e.target.value); setRedInputs(false) }} placeholder={ locales[locale].phone } required />
            <input className={redInputs ? "red" : ""} type="email" value={email} onChange={e => { setEmail(e.target.value); setRedInputs(false) }} placeholder={ locales[locale].email } required />
            <textarea className={redInputs ? "red" : ""} value={message} onChange={e => { setMessage(e.target.value); setRedInputs(false) }} placeholder={ locales[locale].message } required />
          </div>

          <div className="buttons">
            <div className="files-select">
              <input ref={fileInputRef} type="file" id="fileInput" multiple onChange={handleFilesAdd} />
              <label htmlFor="fileInput">
                <Image className="mobile" src={FileUploadMobileSVG} alt="" />
                <Image src={FileUploadSVG} alt="" />
                { !files.length && <span>{ locales[locale].file }</span> }
              </label>
              <div className="selected-files">
                { files.map((file, i) => (
                  <div className="file-label" key={i}>
                    <span className="file-name">{ file.name }</span>
                    <button type="button" className="cross" onClick={() => handleFileRemove(i)}>
                      <Image className="mobile" src={CrossMobileSVG} alt="" />
                      <Image src={CrossSVG} alt="" />
                    </button>
                  </div>
                )) }
              </div>
            </div>
            <button className={name.length && tel.length && email.length && message.length ? "" : "disabled"} onClick={name.length && tel.length && email.length && message.length ? ()=>{} : () => setRedInputs(true)}>
              <span>{ locales[locale].send }</span>
              { !formPending && <>
                <Image className="mobile" src={ArrowRightMobileSVG} alt="" />
                <Image src={ArrowRightSVG} alt="" />
              </> }
              { formPending && <Image className="loading" src={LoadingSVG} alt="" /> }
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}