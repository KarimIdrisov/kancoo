"use client"
import PowerIMG from "@/images/about/opportunities/power.jpeg"
import QualityIMG from "@/images/about/opportunities/quality.jpeg"
import PackageIMG from "@/images/about/opportunities/package.jpeg"
import Image from "next/image"
import { useState } from "react"

interface jsonInterface {
  title: string
  cards: [
    {
      title: string
      p: string
    }
  ]
}

export default ({ json }: { json: jsonInterface }) => {
  const [cardOpened, setCardOpened] = useState(0)

  return (
    <section className="opportunities wrapper">
      <h1 className="title">{ json.title }</h1>
      <div className="carousel">
        { json.cards.map((card, i) => (
          <div className={`card-cont ${ i === cardOpened ? "opened" : "" }`} onMouseOver={() => setCardOpened(i)} key={i}>
            <div className="img-cont">
              <Image className={`img-${i}`} src={[PowerIMG, QualityIMG, PackageIMG][i]} alt="" placeholder="blur" />
            </div>
            <div className="card">
              <div className="card-title">{ card.title }</div>
              <p>{ card.p }</p>
            </div>
          </div>
        )) }
      </div>
    </section>
  )
}