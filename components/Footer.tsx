import Logo from "@/images/logo.png"
import Image from "next/image"
import icon_1 from "@/images/footer/3.svg"
import icon_2 from "@/images/footer/2.svg"
import icon_3 from "@/images/footer/1.svg"
import icon_4 from "@/images/footer/4.svg"

export default () => {
  return (
    <footer className="wrapper">
      <div className="container">
        <div className="copyright">
          <Image src={Logo} alt="" />
          <div className="paragraphs">
            <p>© Dalian Kancoo Die & Mould Technology, 2023</p>
            <p>Huilibeiyuan, Ganjingzi District, Dalian, China 116000</p>
          </div>
        </div>
        <div className="links">
          <a href="https://wa.me/+8618525484873">
            <Image src={icon_1} alt="" />
            <span>WhatsApp</span>
          </a>
          <a href="mailto:info@kancoo.ru">
            <Image src={icon_2} alt="" />
            <span>Mail</span>
          </a>
          <a href="/">
            <Image src={icon_4} alt="" />
            <span>Telegram</span>
          </a>
        </div>
      </div>
    </footer>
  )
}