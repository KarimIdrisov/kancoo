"use client"
import Image from "next/image"
import img_1 from "@/images/products/stamping/1.jpg"
import img_2 from "@/images/products/stamping/2.jpg"
import img_3 from "@/images/products/stamping/3.jpg"
import img_4 from "@/images/products/stamping/4.jpg"
import img_5 from "@/images/products/press-forms/5.jpg"
import img_6 from "@/images/products/press-forms/6.jpg"
import img_7 from "@/images/products/press-forms/7.jpg"
import img_8 from "@/images/products/metalworking/8.jpg"
import img_9 from "@/images/products/equipment/9.jpg"
import img_10 from "@/images/products/equipment/10.png"
import img_11 from "@/images/products/equipment/11.jpg"
import img_12 from "@/images/products/equipment/12.jpg"
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
        images: [img_1, img_2, img_3, img_4]
      },
      press_forms: {
        ru: jsonPressForms_ru,
        en: jsonPressForms_en,
        images: [img_5, img_6, img_7]
      },
      metalworking: {
        ru: jsonMetalworking_ru,
        en: jsonMetalworking_en,
        images: [img_8]
      },
      equipment: {
        ru: jsonEquipment_ru,
        en: jsonEquipment_en,
        images: [img_9, img_10, img_11, img_12]
      }
    }
  }
  
  const [detailsOpened, setDetailsOpened] = useState(false)
  const [openedCategory, setOpenedCategory] = useState(Object.keys(locales.categories)[0])
  const [openedCard, setOpenedCard] = useState(0)
  const [contactForm, setContactForm] = useState(false)

  const handleCardClick = (category_name: string, card_num: number) => {
    setDetailsOpened(true)
    setOpenedCategory(category_name)
    setOpenedCard(card_num)
    setTimeout(()=>{
      const details = document.querySelector('.details')
      details?.scrollIntoView({ behavior: "smooth" })
    })
  }

  const handleSwitchCard = (direction: string) => {
    const categories = Object.keys(locales.categories)
    // prev card
    if(direction === "+"){
      if(openedCard === locales.categories[openedCategory].images.length-1){
        if(category) setOpenedCard(0)
        else{
          const newOpenedCategory = categories.indexOf(openedCategory) === categories.length-1 ? categories[0] : categories[categories.indexOf(openedCategory)+1]
          setOpenedCategory(newOpenedCategory)
          setOpenedCard(0)
        }
      }
      else setOpenedCard(openedCard + 1)
    }
    // next card
    else if(direction === "-"){
      if(!openedCard){
        if(category) setOpenedCard(locales.categories[category].images.length-1)
        else{
          const newOpenedCategory = categories.indexOf(openedCategory) === 0 ? categories[categories.length-1] : categories[categories.indexOf(openedCategory)-1]
          setOpenedCategory(newOpenedCategory)
          setOpenedCard(locales.categories[newOpenedCategory].images.length-1)
        }
      }
      else setOpenedCard(openedCard - 1)
    }
  }

  return (
    <section className="wrapper">
      <div className="title">{ category ? locales.categories[category][locale].title : locales.all_products[locale].title }</div>
      { category && <p dangerouslySetInnerHTML={{ __html: locales.categories[category][locale].description }} /> }

      <div className="cards">
        { Object.keys(locales.categories).map((category_name, i) => (category_name === category || category === undefined) && (
          locales.categories[category_name][locale].cards.map((card: any, j: number) => (
            <div className={`card ${detailsOpened && openedCategory === category_name && openedCard === j ? "opened" : ""}`} onClick={() => handleCardClick(category_name, j)} key={`${i}_${j}`}>
              <div>
                <div className="card-title">{ card.name }</div>
                <div className="to-order">{ card.to_order }</div>
              </div>
              <Image className="product-img" src={locales.categories[category_name].images[j]} alt="" placeholder="blur" />
              <Image className="arrow-right" src={ArrowRightSVG} alt="" />
              <Image className="arrow-right mobile" src={ArrowRightMobileSVG} alt="" />
            </div>
          ))
        )) }
      </div>

      { detailsOpened && <div className="details card">
        <button className="cross-cont" onClick={() => setDetailsOpened(false)}>
          <Image className="cross" src={CrossSVG} alt="" />
          <Image className="cross mobile" src={CrossMobileSVG} alt="" />
        </button>
        <div className="img-cont card">
          <Image className="prev-arrow" src={prevArrowSVG} alt="" onClick={() => handleSwitchCard("-")} />
          <Image className="card-img" src={locales.categories[openedCategory].images[openedCard]} alt="" />
          <Image className="next-arrow" src={nextArrowSVG} alt="" onClick={() => handleSwitchCard("+")} />
        </div>
        <div className="head">
          <h1>{ locales.categories[openedCategory][locale].cards[openedCard].name }</h1>
          <div className="to-order">{ locales.categories[openedCategory][locale].cards[openedCard].to_order }</div>
          <button className="btn" onClick={() => setContactForm(true)}>{ locales.categories[openedCategory][locale].contact }</button>
        </div>
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

      { contactForm && <ContactForm locale={locale} popout={() => setContactForm(false)} /> }
    </section>
  )
}