import img_1 from "@/images/about/firm/1.jpeg"
import img_2 from "@/images/about/firm/2.jpeg"
import img_3 from "@/images/about/firm/3.jpeg"
import img_4 from "@/images/about/firm/4.jpeg"
import Image from "next/image"

export default ({ json }: { json: { [key: string]: string } }) => {
  return (
    <section className="firm wrapper">
      <div className="title">{ json.title }</div>
      <div className="carousel">
        <Image src={img_1} alt="" placeholder="blur" />
        <Image src={img_2} alt="" placeholder="blur" />
        <Image src={img_3} alt="" placeholder="blur" />
        <Image src={img_4} alt="" placeholder="blur" />
      </div>
    </section>
  )
}