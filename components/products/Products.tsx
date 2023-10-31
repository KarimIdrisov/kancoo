"use client"
import Image from "next/image"
import img_1 from "@/images/products/1.jpg"
import img_2 from "@/images/products/2.jpg"
import img_3 from "@/images/products/3.jpg"
import img_4 from "@/images/products/4.jpg"
import img_5 from "@/images/products/5.jpg"
import img_6 from "@/images/products/6.jpg"
import img_7 from "@/images/products/7.jpg"
import img_8 from "@/images/products/8.jpg"
import img_9 from "@/images/products/9.jpg"
import img_10 from "@/images/products/10.png"
import img_11 from "@/images/products/11.jpg"
import img_12 from "@/images/products/12.jpg"
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
  const imgs = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10, img_11, img_12]
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
        <button className="cross-cont" onClick={() => setDetailsOpened(false)}>
          <Image className="cross" src={CrossSVG} alt="" />
          <Image className="cross mobile" src={CrossMobileSVG} alt="" />
        </button>
        <div className="img-cont card">
          <Image src={imgs[openedNumber]} alt="" />
        </div>
        <div className="head">
          <h1>{ json.cards[openedNumber].name }</h1>
          <div className="to-order">{ json.to_order }</div>
          <button className="btn" onClick={() => setContactForm(true)}>{ json.contact }</button>
        </div>
        <div className="about">
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