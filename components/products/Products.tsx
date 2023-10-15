"use client"
import Image from "next/image"
import img_1 from "@/images/products/1.jpeg"
import ArrowRightSVG from "@/images/products/arrow-right.svg"
import ArrowRightMobileSVG from "@/images/products/arrow-right-mobile.svg"
import CrossMobileSVG from "@/images/products/cross-mobile.svg"
import CrossSVG from "@/images/products/cross.svg"
import { useState } from "react"
import ContactForm from "../contact/ContactForm"

interface ProductsSectionInterface {
  title: string
  description?: string
  to_order: string
  contact: string
  cards: [
    {
      name: string
      about: [
        {
          title: string,
          p: string | { name: string, p: string }[]
        }
      ]
    }
  ]
}

export default ({ json, locale, jsonContactForm }: { json: ProductsSectionInterface, locale: string, jsonContactForm: { [key: string]: string } }) => {
  const imgs = [img_1, img_1, img_1, img_1]
  const [detailsOpened, setDetailsOpened] = useState(false)
  const [openedNumber, setOpenedNumber] = useState(0)
  const [contactForm, setContactForm] = useState(false)

  const handleCardClick = (card_num: number) => {
    setDetailsOpened(true)
    setOpenedNumber(card_num)
    setTimeout(()=>{
      const details = document.querySelector('.details')
      details?.scrollIntoView({ behavior: "smooth" })
    })
  }

  return (
    <section className="wrapper">
      <div className="title">{ json.title }</div>
      { json.description && <p dangerouslySetInnerHTML={{ __html: json.description }} /> }

      <div className="cards">
        { json.cards.map((card, i) => (
          <div className={`card ${detailsOpened && i === openedNumber ? "opened" : ""}`} onClick={() => handleCardClick(i)} key={i}>
            <div>
              <div className="card-title">{ card.name }</div>
              <div className="to-order">{ json.to_order }</div>
            </div>
            <Image className="product-img" src={imgs[i]} alt="" placeholder="blur" />
            <Image className="arrow-right" src={ArrowRightSVG} alt="" />
            <Image className="arrow-right mobile" src={ArrowRightMobileSVG} alt="" />
          </div>
        )) }
      </div>

      { detailsOpened && <div className="details card">
        <div className="cross-cont" onClick={() => setDetailsOpened(false)}>
          <Image className="cross" src={CrossSVG} alt="" />
          <Image className="cross mobile" src={CrossMobileSVG} alt="" />
        </div>
        <div className="cont up">
          <div className="img-cont card">
            <Image src={imgs[openedNumber]} alt="" />
          </div>
          <div className="head">
            <h1>{ json.cards[openedNumber].name }</h1>
            <div className="to-order">{ json.to_order }</div>
            <button className="btn" onClick={() => setContactForm(true)}>{ json.contact }</button>
          </div>
        </div>
        <div className="cont down about">
          { json.cards[openedNumber].about.map((aboutItem, i) => (
            <div key={i}>
              <h2>{ aboutItem.title }</h2>
              { typeof aboutItem.p === "string" ? <p dangerouslySetInnerHTML={{ __html: aboutItem.p }} /> : aboutItem.p.map((pItem, j) => (
                <p key={j}>
                  <span>{ `${ pItem.name }: ` }</span>
                  { pItem.p }
                </p>
              )) }
            </div>
          )) }
        </div>
      </div> }

      { contactForm && <ContactForm json={jsonContactForm} locale={locale} popout={() => setContactForm(false)} /> }
    </section>
  )
}