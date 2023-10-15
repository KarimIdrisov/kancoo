"use client"
import GlobeSVG from "@/images/header/globe.svg"
import CloseMenuBtnSVG from "@/images/header/close-menu-btn.svg"
import ArrowDownSVG from "@/images/header/arrow-down.svg"
import ArrowRightSVG from "@/images/header/arrow-right.svg"
import ArrowRightMobileSVG from "@/images/header/arrow-right-mobile.svg"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default ({ json }: { json: { [key: string]: string } }) => {
  const path = usePathname()
  const [languageMenuOpened, setLanguageMenuOpened] = useState(false)

  return (
    <>
      {/* Close Area */}
      <div className={`close-area ${languageMenuOpened ? "" : "hidden"}`} onClick={() => setLanguageMenuOpened(false)} />

      {/* Menu Btn */}
      <button className="lang-btn" onClick={() => setLanguageMenuOpened(prevState => !prevState)}>
        <span className="mobile">
          <Image src={GlobeSVG} alt="" />
        </span>
        <span className="desktop">
          { json.code }
          <Image src={ArrowDownSVG} alt="" />
        </span>
      </button>

      {/* Desktop Btn */}
      <menu className={languageMenuOpened ? "" : "hidden"}>
        <button className="close-menu-btn" onClick={() => setLanguageMenuOpened(prevState => !prevState)}>
          <Image src={CloseMenuBtnSVG} alt="" />
        </button>
        <div className="list">
          <div>{ json.title }</div>
          <div className="sublist">
            <Link href={`/ru/${path.substring(3)}`} onClick={() => setLanguageMenuOpened(false)}>Русский<Image className="arrow-right" src={ArrowRightSVG} alt="" /></Link>
            <Link href={`/en/${path.substring(3)}`} onClick={() => setLanguageMenuOpened(false)}>English<Image className="arrow-right" src={ArrowRightSVG} alt="" /></Link>
            <Link href={`/jp/${path.substring(3)}`} onClick={() => setLanguageMenuOpened(false)}>日本語<Image className="arrow-right" src={ArrowRightSVG} alt="" /></Link>
          </div>
        </div>
      </menu>

      {/* Mobile Menu */}
      <menu className={`mobile ${languageMenuOpened ? "" : "hidden"}`}>
        <button className="close-menu-btn" onClick={() => setLanguageMenuOpened(prevState => !prevState)}>
          <Image src={CloseMenuBtnSVG} alt="" />
        </button>
        <div className="list">
          <div>{ json.title }</div>
          <div className="sublist">
            <Link href={`/ru/${path.substring(3)}`} onClick={() => setLanguageMenuOpened(false)}>Русский<Image className="arrow-right" src={ArrowRightMobileSVG} alt="" /></Link>
            <Link href={`/en/${path.substring(3)}`} onClick={() => setLanguageMenuOpened(false)}>English<Image className="arrow-right" src={ArrowRightMobileSVG} alt="" /></Link>
            <Link href={`/jp/${path.substring(3)}`} onClick={() => setLanguageMenuOpened(false)}>日本語<Image className="arrow-right" src={ArrowRightMobileSVG} alt="" /></Link>
          </div>
        </div>
      </menu>
    </>
  )
}