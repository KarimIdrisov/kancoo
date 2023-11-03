"use client"
import Image from "next/image"
import stamping_1_1 from "@/images/products/stamping/1_1.jpg"
import stamping_1_2 from "@/images/products/stamping/1_2.png"
import stamping_1_3 from "@/images/products/stamping/1_3.jpg"
import stamping_1_4 from "@/images/products/stamping/1_4.jpg"
import stamping_2_1 from "@/images/products/stamping/2_1.jpg"
import stamping_2_2 from "@/images/products/stamping/2_2.jpg"
import stamping_2_3 from "@/images/products/stamping/2_3.jpg"
import stamping_2_4 from "@/images/products/stamping/2_4.jpg"
import stamping_3_1 from "@/images/products/stamping/3_1.jpg"
import stamping_3_2 from "@/images/products/stamping/3_2.jpg"
import stamping_3_3 from "@/images/products/stamping/3_3.jpg"
import stamping_3_4 from "@/images/products/stamping/3_4.jpg"
import stamping_3_5 from "@/images/products/stamping/3_5.jpg"
import stamping_3_6 from "@/images/products/stamping/3_6.jpg"
import stamping_4_1 from "@/images/products/stamping/4_1.jpg"
import stamping_4_2 from "@/images/products/stamping/4_2.jpg"
import stamping_4_3 from "@/images/products/stamping/4_3.jpg"
import stamping_4_4 from "@/images/products/stamping/4_4.jpg"
import press_forms_1_1 from "@/images/products/press_forms/1_1.jpg"
import press_forms_1_2 from "@/images/products/press_forms/1_2.jpg"
import press_forms_1_3 from "@/images/products/press_forms/1_3.jpg"
import press_forms_2_1 from "@/images/products/press_forms/2_1.jpg"
import press_forms_2_2 from "@/images/products/press_forms/2_2.jpg"
import press_forms_2_3 from "@/images/products/press_forms/2_3.jpg"
import press_forms_3_1 from "@/images/products/press_forms/3_1.jpg"
import press_forms_3_2 from "@/images/products/press_forms/3_2.jpg"
import press_forms_3_3 from "@/images/products/press_forms/3_3.jpg"
import press_forms_3_4 from "@/images/products/press_forms/3_4.jpg"
import press_forms_3_5 from "@/images/products/press_forms/3_5.jpg"
import press_forms_3_6 from "@/images/products/press_forms/3_6.jpg"
import press_forms_3_7 from "@/images/products/press_forms/3_7.jpg"
import metalworking_1_1 from "@/images/products/metalworking/1_1.jpg"
import metalworking_1_2 from "@/images/products/metalworking/1_2.jpg"
import metalworking_1_3 from "@/images/products/metalworking/1_3.jpg"
import metalworking_1_4 from "@/images/products/metalworking/1_4.jpg"
import metalworking_1_5 from "@/images/products/metalworking/1_5.jpg"
import metalworking_1_6 from "@/images/products/metalworking/1_6.jpg"
import metalworking_1_7 from "@/images/products/metalworking/1_7.jpg"
import metalworking_1_8 from "@/images/products/metalworking/1_8.jpg"
import equipment_1_1 from "@/images/products/equipment/1_1.jpg"
import equipment_1_2 from "@/images/products/equipment/1_2.jpg"
import equipment_1_3 from "@/images/products/equipment/1_3.jpg"
import equipment_2_1 from "@/images/products/equipment/2_1.png"
import equipment_3_1 from "@/images/products/equipment/3_1.jpg"
import equipment_3_2 from "@/images/products/equipment/3_2.jpg"
import equipment_4_1 from "@/images/products/equipment/4_1.jpg"
import ArrowRightSVG from "@/images/products/arrow-right.svg"
import ArrowRightMobileSVG from "@/images/products/arrow-right-mobile.svg"
import CrossMobileSVG from "@/images/products/cross-mobile.svg"
import CrossSVG from "@/images/products/cross.svg"
import prevArrowSVG from "@/images/products/prev-arrow.svg"
import nextArrowSVG from "@/images/products/next-arrow.svg"
import { useState } from "react"
import ContactForm from "../contact/ContactForm"
import jsonAllProducts_ru from "@/locales/products/ru.json"
import jsonAllProducts_en from "@/locales/products/en.json"
import jsonEquipment_ru from "@/locales/products/equipment/ru.json"
import jsonMetalworking_ru from "@/locales/products/metalworking/ru.json"
import jsonPressForms_ru from "@/locales/products/press_forms/ru.json"
import jsonStamping_ru from "@/locales/products/stamping/ru.json"
import jsonEquipment_en from "@/locales/products/equipment/en.json"
import jsonMetalworking_en from "@/locales/products/metalworking/en.json"
import jsonPressForms_en from "@/locales/products/press_forms/en.json"
import jsonStamping_en from "@/locales/products/stamping/en.json"

export default ({ category, locale }: { category?: string, locale: string }) => {
  const locales: any = {
    all_products: {
      ru: jsonAllProducts_ru,
      en: jsonAllProducts_en
    },
    categories: {
      stamping: {
        ru: jsonStamping_ru,
        en: jsonStamping_en,
        images: [
          [stamping_1_1, stamping_1_2, stamping_1_3, stamping_1_4],
          [stamping_2_1, stamping_2_2, stamping_2_3, stamping_2_4],
          [stamping_3_1, stamping_3_2, stamping_3_3, stamping_3_4, stamping_3_5, stamping_3_6],
          [stamping_4_1, stamping_4_2, stamping_4_3, stamping_4_4],
        ]
      },
      press_forms: {
        ru: jsonPressForms_ru,
        en: jsonPressForms_en,
        images: [
          [press_forms_1_1, press_forms_1_2, press_forms_1_3],
          [press_forms_2_1, press_forms_2_2, press_forms_2_3],
          [press_forms_3_1, press_forms_3_2, press_forms_3_3, press_forms_3_4, press_forms_3_5, press_forms_3_6, press_forms_3_7],
        ]
      },
      metalworking: {
        ru: jsonMetalworking_ru,
        en: jsonMetalworking_en,
        images: [
          [metalworking_1_1, metalworking_1_2, metalworking_1_3, metalworking_1_4, metalworking_1_5, metalworking_1_6, metalworking_1_7, metalworking_1_8]
        ]
      },
      equipment: {
        ru: jsonEquipment_ru,
        en: jsonEquipment_en,
        images: [
          [equipment_1_1, equipment_1_2, equipment_1_3],
          [equipment_2_1],
          [equipment_3_1, equipment_3_2],
          [equipment_4_1]
        ]
      }
    }
  }
  
  const [detailsOpened, setDetailsOpened] = useState(false)
  const [openedCategory, setOpenedCategory] = useState(Object.keys(locales.categories)[0])
  const [openedCard, setOpenedCard] = useState(0)
  const [openedImage, setOpenedImage] = useState(0)
  const [contactForm, setContactForm] = useState(false)

  const handleCardClick = (category_name: string, card_num: number) => {
    setDetailsOpened(true)
    setOpenedCategory(category_name)
    setOpenedCard(card_num)
    setOpenedImage(0)
    setTimeout(()=>{
      const details = document.querySelector('.details')
      details?.scrollIntoView({ behavior: "smooth" })
    })
  }

  const handleSwitchCard = (direction: string) => {
    const categories = Object.keys(locales.categories)
    // prev image
    if(direction === "+"){
      if(openedImage === locales.categories[openedCategory].images[openedCard].length-1) setOpenedImage(0)
      else setOpenedImage(openedImage+1)
    }
    // next image
    else if(direction === "-"){
      if(!openedImage) setOpenedImage(locales.categories[openedCategory].images[openedCard].length-1)
      else setOpenedImage(openedImage-1)
    }
  }

  return (
    <section className="wrapper">
      <div className="title">{ category ? locales.categories[category][locale].title : locales.all_products[locale].title }</div>
      { category && <p dangerouslySetInnerHTML={{ __html: locales.categories[category][locale].description }} /> }

      {/* cards */}
      <div className="cards">
        { Object.keys(locales.categories).map((category_name, i) => (category_name === category || category === undefined) && (
          locales.categories[category_name][locale].cards.map((card: any, j: number) => (
            <div className={`card ${detailsOpened && openedCategory === category_name && openedCard === j ? "opened" : ""}`} onClick={() => handleCardClick(category_name, j)} key={`${i}_${j}`}>
              <div>
                <div className="card-title">{ card.name }</div>
                <div className="to-order">{ card.to_order }</div>
              </div>
              <Image className="product-img" src={locales.categories[category_name].images[j][0]} alt="" placeholder="blur" />
              <Image className="arrow-right" src={ArrowRightSVG} alt="" />
              <Image className="arrow-right mobile" src={ArrowRightMobileSVG} alt="" />
            </div>
          ))
        )) }
      </div>

      {/* product details (opens on card click) */}
      { detailsOpened && <div className="details card">
        <button className="cross-cont" onClick={() => setDetailsOpened(false)}>
          <Image className="cross" src={CrossSVG} alt="" />
          <Image className="cross mobile" src={CrossMobileSVG} alt="" />
        </button>
        {/* product images */}
        <div className="img-cont card">
          { locales.categories[openedCategory].images[openedCard].length > 1 && <Image className="prev-arrow" src={prevArrowSVG} alt="" onClick={() => handleSwitchCard("-")} /> }
          <Image className="card-img" src={locales.categories[openedCategory].images[openedCard][openedImage]} alt="" />
          { locales.categories[openedCategory].images[openedCard].length > 1 && <Image className="next-arrow" src={nextArrowSVG} alt="" onClick={() => handleSwitchCard("+")} /> }
        </div>
        {/* product name && contact btn */}
        <div className="head">
          <h1>{ locales.categories[openedCategory][locale].cards[openedCard].name }</h1>
          <div className="to-order">{ locales.categories[openedCategory][locale].cards[openedCard].to_order }</div>
          <button className="btn" onClick={() => setContactForm(true)}>{ locales.all_products[locale].contact }</button>
        </div>
        {/* about section */}
        <div className="about">
          { locales.categories[openedCategory][locale].cards[openedCard].about.map((aboutItem: any, i: number) => (
            <div key={i}>
              <h2>{ aboutItem.title }:</h2>
              { typeof aboutItem.p === "string" ? <p dangerouslySetInnerHTML={{ __html: aboutItem.p }} /> : aboutItem.p.map((pItem: any, j: number) => (
                <p key={j}>
                  <span>{ `${ pItem.name }: ` }</span>
                  { pItem.p }
                </p>
              )) }
            </div>
          )) }
        </div>
      </div> }

      {/* contact form */}
      { contactForm && <ContactForm locale={locale} popout={() => setContactForm(false)} /> }
    </section>
  )
}