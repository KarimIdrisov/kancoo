import img_1 from "@/images/contact/contacts/1.svg"
import img_2 from "@/images/contact/contacts/2.svg"
import img_3 from "@/images/contact/contacts/3.svg"
import img_4 from "@/images/contact/contacts/4.svg"
import img_1_mobile from "@/images/contact/contacts/1-mobile.svg"
import img_2_mobile from "@/images/contact/contacts/2-mobile.svg"
import img_3_mobile from "@/images/contact/contacts/3-mobile.svg"
import img_4_mobile from "@/images/contact/contacts/4-mobile.svg"
import Image from "next/image"

export default ({ json }: { json: { [key: string]: string } }) => {
  return (
    <section className="contacts wrapper">
      <div className="title">{ json.title }</div>
      <div className="list">
        <div className="item">
          <div>{ json.contactPerson }</div>
          <div className="bold">{ json.personName }</div>
        </div>
        <div className="item">
          <div>{ json.phone }</div>
          <div className="bold">
            <a href="tel:+79045876521">+79045876521</a>
          </div>
        </div>
        <div className="item">
          <div>Email</div>
          <div className="bold">
            <a href="mailto:KANCOO@gmail.com">KANCOO@gmail.com</a>
          </div>
        </div>
        <div className="item">
          <div>{ json.address }</div>
          <div className="bold">Huilibeiyuan, Ganjingzi District, Dalian, China 116000</div>
        </div>
        <div className="item">
          <div>{ json.messangers }</div>
          <div className="links">
            <a href="/" className="mobile"><Image src={img_1_mobile} alt="" /></a>
            <a href="mailto:info@kancoo.ru" className="mobile"><Image src={img_2_mobile} alt="" /></a>
            <a href="https://wa.me/+8618525484873" className="mobile"><Image src={img_3_mobile} alt="" /></a>
            <a href="/" className="mobile"><Image src={img_4_mobile} alt="" /></a>
            <a href="/"><Image src={img_1} alt="" /></a>
            <a href="mailto:info@kancoo.ru"><Image src={img_2} alt="" /></a>
            <a href="https://wa.me/+8618525484873"><Image src={img_3} alt="" /></a>
            <a href="/"><Image src={img_4} alt="" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}