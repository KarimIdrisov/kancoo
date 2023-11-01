"use client"
import Link from "next/link"
import MenuBtnSVG from "@/images/header/menu-btn.svg"
import CloseMenuBtnSVG from "@/images/header/close-menu-btn.svg"
import ArrowRightMobileSVG from "@/images/header/arrow-right-mobile.svg"
import ArrowRightSVG from "@/images/header/arrow-right.svg"
import Image from "next/image"
import { useState } from "react"

export default ({ json, locale, products }: { json: { [key: string]: string }, locale: string, products: { [key: string]: string } }) => {
  const [desktopMenuOpened, setDesktopMenuOpened] = useState(false)
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false)
  const [productsMenuOpened, setProductsMenuOpened] = useState(false)

  const handleCloseAll = () => {
    setDesktopMenuOpened(false)
    setMobileMenuOpened(false)
    setProductsMenuOpened(false)
  }
  
  return (
    <>
      {/* Close Area */}
      <div className={`close-area ${desktopMenuOpened || mobileMenuOpened ? "" : "hidden"}`} onClick={handleCloseAll} />

      {/* Desktop Nav */}
      <nav>
        <Link href={`/${locale}`}>{ json.home }</Link>
        <button onClick={() => setDesktopMenuOpened(prevState => !prevState)}>{ json.products }</button>
        <Link href={`/${locale}/about`}>{ json.about }</Link>
        <Link href={`/${locale}/contact`}>{ json.contact }</Link>
      </nav>

      {/* Desktopm Menu */}
      <menu className={desktopMenuOpened ? "" : "hidden"}>
        {/* Close Btn */}
        <button className="close-menu-btn" onClick={() => setDesktopMenuOpened(prevState => !prevState)}>
          <Image src={CloseMenuBtnSVG} alt="" />
        </button>
        {/* List */}
        <div className="list">
          <div>{ json.products }</div>
          <div className="sublist">
            { Object.keys(products).map((product, i) => (
              <Link href={`/${locale}/products/${product}`} onClick={handleCloseAll} key={i}>
                { products[product] }
                <Image className="arrow-right" src={ArrowRightSVG} alt="" />
              </Link>
            )) }
          </div>
        </div>
      </menu>


      {/* Menu Btn */}
      <button className="menu-btn" onClick={() => setMobileMenuOpened(prevState => !prevState)}>
        <Image src={MenuBtnSVG} alt="" />
      </button>
      
      {/* Mobile Menu */}
      <menu className={`mobile ${mobileMenuOpened ? "" : "hidden"}`}>
        {/* Close Btn */}
        <button className="close-menu-btn" onClick={() => setMobileMenuOpened(prevState => !prevState)}>
          <Image src={CloseMenuBtnSVG} alt="" />
        </button>
        {/* List */}
        <div className="list">
          <Link href={`/${locale}`} onClick={handleCloseAll}>{ json.home }</Link>
          <button onClick={() => setProductsMenuOpened(prevState => !prevState)}>{ json.products }</button>
          <div className={`sublist ${productsMenuOpened ? "" : "hidden"}`}>
            <div>
              { Object.keys(products).map((product, i) => (
                <Link href={`/${locale}/products/${product}`} onClick={handleCloseAll} key={i}>
                  { products[product] }
                  <Image className="arrow-right" src={ArrowRightMobileSVG} alt="" />
                </Link>
              )) }
            </div>
          </div>
          <Link href={`/${locale}/about`} onClick={handleCloseAll}>{ json.about }</Link>
          <Link href={`/${locale}/contact`} onClick={handleCloseAll}>{ json.contact }</Link>
        </div>
      </menu>
    </>
  )
}