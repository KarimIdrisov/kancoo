import Image from "next/image"
import img_1 from "@/images/home/benefits/1.png"
import img_2 from "@/images/home/benefits/2.png"
import img_3 from "@/images/home/benefits/3.png"
import img_4 from "@/images/home/benefits/4.png"
import img_5 from "@/images/home/benefits/5.png"
import img_6 from "@/images/home/benefits/6.png"
import img_7 from "@/images/home/benefits/7.png"
import img_8 from "@/images/home/benefits/8.png"

interface jsonInterface {
  title: string
  cards: string[]
}

export default ({ json }: { json: jsonInterface }) => {
  const imgs = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8]

  return (
    <section className="benefits wrapper">
      <h1 className="title">{ json.title }</h1>
      <div className="grid">
        { json.cards.map((cardText, i) => (
          <div className="card">
            <Image src={imgs[i]} alt="" />
            <p>{ cardText }</p>
          </div>
        )) }
      </div>
    </section>
  )
}